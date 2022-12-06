import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as RequestExpres } from 'express';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import { Role } from 'src/modules/user/models/Roles.model';
import { DegreeService } from './grade.service';
import { AddSubjectDto } from './GreadeSubjects.dto';

@ApiTags('Grades')
@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@Controller('grades')
export class DegreeController {
  constructor(private degreeService: DegreeService) {}

  @Roles(Role.ADMIN, Role.TEACHER)
  @Get()
  getAll() {
    return this.degreeService.getAll();
  }

  @Roles(Role.ADMIN, Role.TEACHER, Role.TEACHER)
  @Get(':degreId/subjects')
  getSubjectByDegree(
    @Request() req: RequestExpres,
    @Param('degreeId') degreeId: string,
  ) {
    const institutionId = req.user.institutionId;
    return this.degreeService.getSubjectsByGrade(degreeId, institutionId);
  }

  @Roles(Role.ADMIN)
  @Post(':degreeId/subjects')
  addSubjet(
    @Request() req: RequestExpres,
    @Param('gradeId') gradeId: string,
    @Body() addSubjectData: AddSubjectDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.degreeService.addSubjet(institutionId, gradeId, addSubjectData);
  }
}
