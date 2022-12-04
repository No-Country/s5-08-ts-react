import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as RequestExpress } from 'express';
import { Roles, ROLES_KEY } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import { Role } from 'src/modules/user/models/Roles.model';
import { PostStudentDTO, UpdateStudentDto } from '../dtos/student.dto';
import { StudentService } from '../services/student.service';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(private studentServices: StudentService) {}

  @Roles(Role.ADMIN)
  @Post()
  post(@Request() req: RequestExpress, @Body() newStudent: PostStudentDTO) {
    const institutionId = req.user.institutionId;
    return this.studentServices.create(institutionId, newStudent);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(
    @Request() req: RequestExpress,
    @Param('id') id: string,
    @Body() data: UpdateStudentDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.studentServices.update(institutionId, id, data);
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: RequestExpress) {
    const institutionId = req.user.institutionId;
    return this.studentServices.findAll({ institutionId });
  }

  @Roles(Role.ADMIN, Role.TEACHER)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentServices.findOne(id);
  }

  @Roles(Role.PARENTS, Role.ADMIN, Role.TEACHER)
  @Get(':parentId')
  getAllByParent(
    @Request() req: RequestExpress,
    @Param('parentId') parentId: string,
  ) {
    if (req.user.role === Role.PARENTS && req.user.id !== parentId) {
      throw new ForbiddenException();
    }

    const institutionId = req.user.institutionId;
    return this.studentServices.findAll({ institutionId, parentId });
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  delete(@Request() req: RequestExpress, @Param('id') id: string) {
    const institutionId = req.user.institutionId;
    return this.studentServices.delete(id, institutionId);
  }
}
