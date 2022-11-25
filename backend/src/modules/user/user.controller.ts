import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as RequestExpress } from 'express';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAccessGuard } from '../auth/Guards/jwt.guard';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { CreateUserDTO, UpdateUserDTO } from './dtos/users.dto';
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
  getUsers(@Request() req: RequestExpress) {
    const institutionId = req.user.institutionId;
    return this.usersService.find(institutionId);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne({ id });
  }

  @Roles(Role.ADMIN)
  @Post()
  /*@ApiCreatedResponse({
    type: User,
  })*/
  createUser(
    @Request() req: RequestExpress,
    @Body() newUser: CreateUserDTO,
  ): Promise<User> {
    const institutionId = req.user.institutionId;
    return this.usersService.create({ ...newUser, institutionId });
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return this.usersService.update(id, data);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
