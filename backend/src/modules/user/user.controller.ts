import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getUsers() {
    return this.usersService.find();
  }
}
