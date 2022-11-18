import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import config from '../../config';
import { compareData, hashData } from '../../utils/bcrypt.util';
import { User } from '../user/entities/User.entity';
import { Roles } from '../user/models/Roles.model';
import { UserService } from '../user/user.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import { PayloadToken, Tokens } from './models/tokens.model';
import { AUTH_REPOSITORY_KEY } from './repository/UserAuthRepository.providers';
import { UserAuth } from './UserAuth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @Inject(AUTH_REPOSITORY_KEY)
    private readonly authRepository: Repository<UserAuth>,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async registerAdmin(newUser: RegisterDTO): Promise<{
    tokens: Tokens;
    user: User;
  }> {
    const { password, ...userData } = newUser;

    const user = await this.userService.create({
      ...userData,
      role: Roles.ADMIN,
    });

    const tokens = await this.generateTokens({
      id: user.id,
      name: user.firstName,
      role: user.role,
    });

    await this.createUserAuth({
      password,
      user,
      refreshToken: tokens.refreshToken,
    });

    return { tokens, user };
  }

  private async createUserAuth(newUserAuth: {
    password: string;
    refreshToken: string;
    user: User;
  }) {
    const refreshTokenHash = await hashData(newUserAuth.refreshToken);
    const passwordHash = await hashData(newUserAuth.password);

    const userAuthModel = this.authRepository.create({
      password: passwordHash,
      user: newUserAuth.user,
      refreshTokenHash,
    });

    return await this.authRepository.save(userAuthModel);
  }

  async generateTokens(payload: PayloadToken): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(
        { ...payload },
        { secret: this.configService.secret.accessToken, expiresIn: '1d' },
      ),
      this.jwtService.sign(
        { id: payload.id },
        { secret: this.configService.secret.refreshToken, expiresIn: '60d' },
      ),
    ]);

    return { accessToken, refreshToken };
  }

  async login(userLogin: LoginDTO): Promise<Tokens> {
    try {
      const userAuth = await this.authRepository.findOneBy({
        user: { email: userLogin.email },
      });

      console.log(userAuth);
      console.log(userLogin);
      const isPasswordMatch = await compareData(
        userLogin.password,
        userAuth.password,
      );
      if (!isPasswordMatch)
        throw new UnauthorizedException('Invalid email or password');

      const { user } = userAuth;
      const tokens = await this.generateTokens({
        id: user.id,
        name: user.firstName,
        role: user.role,
      });

      this.authRepository.update(userAuth.id, {
        refreshTokenHash: await hashData(tokens.refreshToken),
      });

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid email or password.');
    }
  }

  /*

  refresh = async (req: Request) => {
    const refreshToken = req.token;
    const { id } = req.user;

    const user = await this.userService.findOne(id);

    const matchesToken = await compareData(refreshToken, user.refreshTokenHash);

    if (!matchesToken)
      throw new UnauthorizedException('Invalid token. Please log in.');

    const { name, email } = user;
    const tokens = await this.getTokens({ name, email, _id });
    this.userService.update(
      { id },
      { refreshTokenHash: await hashData(tokens.refreshToken) },
    );
    return tokens;
  };

  ;*/
}
