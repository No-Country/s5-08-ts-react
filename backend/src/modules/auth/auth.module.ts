import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { userAuthRepositorysProviders } from './repository/UserAuthRepository.providers';

@Module({
  imports: [UserModule, JwtModule],
  providers: [AuthService, ...userAuthRepositorysProviders],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
