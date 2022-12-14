import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import config from '../../config';
import { compareData, hashData } from '../../utils/bcrypt.util';
import { Admin } from '../user/entities/Admin.entity';
import { User } from '../user/entities/User.entity';
import { AdminService } from '../user/services/admin.services';
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
    private readonly adminService: AdminService,
    @Inject(AUTH_REPOSITORY_KEY)
    private readonly authRepository: Repository<UserAuth>,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async registerAdmin(newUserAdmin: RegisterDTO): Promise<Admin> {
    const userAdmin = await this.adminService.createAdmin(
      newUserAdmin.institutionId,
      { ...newUserAdmin },
    );

    return userAdmin;
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

  async activateUserAuth(userId: string, password: string): Promise<Tokens> {
    const user = await this.userService.findOne({ id: userId });
    const tokens = await this.generateTokens({
      id: user.id,
      name: user.firstName,
      institutionId: user.institutionId,
      role: user.role,
    });

    await this.createUserAuth({
      password,
      refreshToken: tokens.refreshToken,
      user,
    });

    return tokens;
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

      const isPasswordMatch = await compareData(
        userLogin.password,
        userAuth.password,
      );
      if (!isPasswordMatch) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const { user } = userAuth;
      const tokens = await this.generateTokens({
        id: user.id,
        name: user.firstName,
        institutionId: user.institutionId,
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

  async refresh(userId: string, refreshToken: string): Promise<Tokens> {
    const userAuth = await this.authRepository.findOneBy({
      user: { id: userId },
    });

    const isMatchesToken = await compareData(
      refreshToken,
      userAuth.refreshTokenHash,
    );

    if (!isMatchesToken)
      throw new UnauthorizedException('Invalid token. Please log in.');

    const { firstName, role, institutionId } = userAuth.user;
    const tokens = await this.generateTokens({
      id: userId,
      name: firstName,
      institutionId,
      role,
    });
    this.authRepository.update(userAuth.id, {
      refreshTokenHash: await hashData(tokens.refreshToken),
    });

    return tokens;
  }
}
