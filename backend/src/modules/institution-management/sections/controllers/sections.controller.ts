import {
  Body,
  Controller,
  Delete,
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
  CreateSectionDTO,
  SectionsFiltersDto,
  UpdateSectionDTO,
} from '../dtos/section.dto';
import { SectionService } from '../services/sections.service';

@ApiTags('Sections')
@ApiBearerAuth()
@UseGuards(JwtAccessGuard, RolesGuard)
@Controller('sections')
export class SectionsController {
  constructor(private sectionsService: SectionService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Request() req: RequestExpress, @Body() newSection: CreateSectionDTO) {
    const institutionId = req.user.institutionId;
    return this.sectionsService.create({ ...newSection, institutionId });
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(@Param('id') sectionId: string, @Body() data: UpdateSectionDTO) {
    return this.sectionsService.update(sectionId, data);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAllBy(
    @Request() req: RequestExpress,
    @Query() filters: SectionsFiltersDto,
  ) {
    const institutionId = req.user.institutionId;
    return this.sectionsService.findAllBy(institutionId, filters);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  delete(@Request() req: RequestExpress, @Param('id') sectionId: string) {
    const institutionId = req.user.institutionId;
    return this.sectionsService.delete(sectionId, institutionId);
  }
}
