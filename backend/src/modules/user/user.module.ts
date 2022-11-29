import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userRepositorysProviders } from './repository/UserRepository.providers';
import { AdminService } from './services/admin.services';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService, ...userRepositorysProviders, AdminService],
  exports: [UserService],
})
export class UserModule {}
