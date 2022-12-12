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
import { CreateParentDto, UpdateParentDTO } from '../dtos/parent.dto';
import { Role } from '../models/Roles.model';
import { ParentService } from '../services/parent.service';

@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Users/Parents')
@Controller('users/parents')
export class ParentController {
  constructor(private parentService: ParentService) {}

  @Roles(Role.ADMIN)
  @Post()
  createUserParent(
    @Request() req: RequestExpress,
    @Body() newUserParent: CreateParentDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.parentService.createParent(institutionId, {
      ...newUserParent,
    });
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  putParent(
    @Request() req: RequestExpress,
    @Param('id') id: string,
    @Body() data: UpdateParentDTO,
  ) {
    const institutionId = req.user.institutionId;
    return this.parentService.update(institutionId, id, data);
  }

  @Roles(Role.ADMIN)
  @Get()
  getAll(@Request() req: RequestExpress) {
    const institutionId = req.user.institutionId;
    return this.parentService.findAll(institutionId);
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.parentService.findOne({ id });
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  delete(@Request() req: RequestExpress, @Param('id') id: string) {
    const institutionId = req.user.institutionId;
    return this.parentService.delete(id, institutionId);
  }
}
