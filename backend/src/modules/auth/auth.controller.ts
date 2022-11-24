import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as RequestExpress } from 'express';
import { AuthService } from './auth.service';
import { ActivateUserDTO, LoginDTO, RegisterDTO } from './dto/auth.dto';
import { JwtAccessGuard, JwtRefreshGuard } from './Guards/jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() newUser: RegisterDTO) {
    return this.authService.registerAdmin(newUser);
  }

  @Post('login')
  login(@Body() user: LoginDTO) {
    return this.authService.login(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAccessGuard)
  @Post('activate')
  activateUserAuth(
    @Request() req: RequestExpress,
    @Body() body: ActivateUserDTO,
  ) {
    const userId = req.user.id;
    const { password } = body;
    return this.authService.activateUserAuth(userId, password);
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Request() req: RequestExpress) {
    const { token: refreshToken, user } = req;

    return this.authService.refresh(user.id, refreshToken);
  }
}
