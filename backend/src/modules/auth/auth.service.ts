import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import config from '../../config';
import { compareData, hashData } from '../../utils/bcrypt.util';
import { IUser } from '../user/interfaces/user.interface';
import { UserService } from '../user/user.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  register = async (newUser: RegisterDTO) => {
    return await this.userService.create(newUser);
  };

  /*login = async (user: LoginDTO) => {
    try {
      const findUser = await this.userService.findOne(
        { email: user.email },
        // { resetPasswordCode: 0 },
      );
      if (!findUser) throw new Error();
      console.log(findUser);
      console.log(user);
      const passwordMatch = await compareData(user.password, findUser.password);

      if (!passwordMatch) throw new Error();

      const { name, email, _id } = findUser;
      const tokens = await this.getTokens({ name, email, _id });
      this.userService.update(
        { _id: findUser._id },
        { refreshTokenHash: await hashData(tokens.refreshToken) },
      );
      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid email or password.');
    }
  };

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

  getTokens = async (
    user: IUser,
  ): Promise<{ accessToken: string; refreshToken: string }> => {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(
        { ...user },
        { secret: this.configService.secret.accessToken, expiresIn: '7d' },
      ),
      this.jwtService.sign(
        { _id: user._id },
        { secret: this.configService.secret.refreshToken, expiresIn: '60d' },
      ),
    ]);

    return { accessToken, refreshToken };
  };*/
}
