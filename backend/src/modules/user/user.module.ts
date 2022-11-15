import { Module } from '@nestjs/common';
import { userRepositorysProviders } from './repository/UserRepository.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...userRepositorysProviders],
  exports: [UserService],
})
export class UserModule {}
