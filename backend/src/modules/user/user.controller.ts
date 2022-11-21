import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/routePublic.decorator';
import { JwtAccessGuard } from '../auth/Guards/jwt.guard';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { Role } from './models/Roles.model';
import { UserService } from './user.service';

@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Public()
  @Get()
  getUsers() {
    return this.usersService.find();
  }
}
