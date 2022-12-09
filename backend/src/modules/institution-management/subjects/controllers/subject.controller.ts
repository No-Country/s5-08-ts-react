import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import { Role } from 'src/modules/user/models/Roles.model';
import { CreateSubjectDto } from '../dtos/subject.dto';
import { SubjectService } from '../services/subject.service';

@ApiTags('Subjects')
@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@Controller('subjects')
export class SubjectsController {
  constructor(private subjectService: SubjectService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() newSubject: CreateSubjectDto) {
    return this.subjectService.create({ name: newSubject.name.toUpperCase() });
  }

  @Roles(Role.ADMIN, Role.TEACHER, Role.PARENTS)
  @Get()
  getAll() {
    return this.subjectService.findAll();
  }
}
