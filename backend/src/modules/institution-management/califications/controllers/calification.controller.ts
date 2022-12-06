import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as RequestExpress } from 'express';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import { Role } from 'src/modules/user/models/Roles.model';
import {
  CreateCalificationGroupDto,
  UpdatetCalificationDto,
} from '../dtos/calification.dto';
import { CalificationService } from '../services/calification.service';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Califications')
@Controller('califications')
export class CalificationController {
  constructor(private calificationService: CalificationService) {}

  @Roles(Role.ADMIN, Role.TEACHER)
  @Post()
  createUserAdmin(
    @Request() req: RequestExpress,
    @Body() newGroupCalification: CreateCalificationGroupDto,
  ) {
    return this.calificationService.create(newGroupCalification);
  }

  @Roles(Role.ADMIN, Role.TEACHER)
  @Put(':id')
  updateUserAdmin(
    @Request() req: RequestExpress,
    @Param('id') id: string,
    @Body() data: UpdatetCalificationDto,
  ) {
    return this.calificationService.update(id, data);
  }

  @Roles(Role.ADMIN, Role.PARENTS, Role.TEACHER)
  @Get('students/:studentId')
  getAllByStudent(
    @Request() req: RequestExpress,
    @Param('studentId') studentId: string,
    @Query('lapse') lapseNumber: number,
  ) {
    return this.calificationService.findAllByStudent(studentId, lapseNumber);
  }
}
