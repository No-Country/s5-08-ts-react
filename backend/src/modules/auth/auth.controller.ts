import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import { JwtRefreshGuard } from './Guards/jwt.guard';

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

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Request() req) {
    const { token: refreshToken, user } = req;

    return this.authService.refresh(user.id, refreshToken);
  }
}
