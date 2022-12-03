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
import { CreateTeacherDto, UpdateTeacherDTO } from '../dtos/teacher.dto';
import { Role } from '../models/Roles.model';
import { TeacherService } from '../services/teacher.service';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Users/Teachers')
@Controller('users/teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Roles(Role.ADMIN)
  @Post()
  createUserTeacher(
    @Request() req: RequestExpress,
    @Body() newUserTeacher: CreateTeacherDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.teacherService.createTeacher(institutionId, {
      ...newUserTeacher,
    });
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  putTeacher(
    @Request() req: RequestExpress,
    @Param('id') id: string,
    @Body() data: UpdateTeacherDTO,
  ) {
    const institutionId = req.user.institutionId;
    return this.teacherService.update(institutionId, id, data);
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: RequestExpress) {
    const institutionId = req.user.institutionId;
    return this.teacherService.findAll(institutionId);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.teacherService.findOne({ id });
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  delete(@Request() req: RequestExpress, @Param('id') id: string) {
    const institutionId = req.user.institutionId;
    return this.teacherService.delete(id, institutionId);
  }
}
