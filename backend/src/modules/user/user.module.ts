import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminController } from './controllers/admin.controller';
import { ParentController } from './controllers/parent.controller';
import { TeacherController } from './controllers/teacher.controller';
import { userRepositorysProviders } from './repository/UserRepository.providers';
import { AdminService } from './services/admin.services';
import { ParentService } from './services/parent.service';
import { TeacherService } from './services/teacher.service';
import { UserService } from './user.service';

@Module({
  imports: [JwtModule],
  controllers: [TeacherController, AdminController, ParentController],
  providers: [
    UserService,
    ...userRepositorysProviders,
    AdminService,
    TeacherService,
    ParentService,
  ],
  exports: [UserService, AdminService],
})
export class UserModule {}
