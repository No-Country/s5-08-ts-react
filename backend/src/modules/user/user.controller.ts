import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAccessGuard } from '../auth/Guards/jwt.guard';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { CreateUserDTO } from './dtos/users.dto';
import { User } from './entities/User.entity';
import { Role } from './models/Roles.model';
import { UserService } from './user.service';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Roles(Role.ADMIN)
  @Get()
  getUsers() {
    return this.usersService.find();
  }

  @Roles(Role.ADMIN)
  @Post()
  /*@ApiCreatedResponse({
    type: User,
  })*/
  createUser(@Body() newUser: CreateUserDTO): Promise<User> {
    return this.usersService.create(newUser);
  }
}
