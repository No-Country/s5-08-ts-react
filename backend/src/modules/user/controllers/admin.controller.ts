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
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import { CreateAdminDto, UpdateAdminDTO } from '../dtos/users.dto';
import { Role } from '../models/Roles.model';
import { AdminService } from '../services/admin.services';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Users/Admins')
@Controller('users/admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Roles(Role.ADMIN)
  @Post()
  createUserAdmin(
    @Request() req: RequestExpress,
    @Body() newUserAdmin: CreateAdminDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.adminService.createAdmin(institutionId, { ...newUserAdmin });
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  updateUserAdmin(
    @Request() req: RequestExpress,
    @Param('id') id: string,
    @Body() data: UpdateAdminDTO,
  ) {
    const institutionId = req.user.institutionId;
    return this.adminService.updateAdmin(institutionId, id, data);
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: RequestExpress) {
    const institutionId = req.user.institutionId;
    return this.adminService.findAll(institutionId);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.adminService.findOne({ id });
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  deleteUserAdmin(@Request() req: RequestExpress, @Param('id') id: string) {
    const institutionId = req.user.institutionId;
    return this.adminService.delete(id, institutionId);
  }
}
