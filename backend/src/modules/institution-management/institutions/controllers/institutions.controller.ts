import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request as ResquestExpress } from 'express';
import { Public } from 'src/modules/auth/decorators/routePublic.decorator';
import { JwtAccessGuard } from 'src/modules/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/modules/auth/Guards/roles.guard';
import {
  CreateInstitutionDto,
  UpdateInstitutionDto,
} from '../dtos/institutions.dto';
import { InstitutionsService } from '../services/institutions.service';

@UseGuards(JwtAccessGuard, RolesGuard)
@ApiTags('Institutions')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionServices: InstitutionsService) {}

  @Public()
  @Post()
  register(@Body() newInstitution: CreateInstitutionDto) {
    return this.institutionServices.create(newInstitution);
  }

  @ApiBearerAuth()
  @Put()
  update(@Request() req: ResquestExpress, @Body() data: UpdateInstitutionDto) {
    const institutionId = req.user.institutionId;
    return this.institutionServices.update(institutionId, data);
  }

  @ApiBearerAuth()
  @Get()
  getInstitution(@Request() req: ResquestExpress) {
    const institutionId = req.user.institutionId;
    return this.institutionServices.findOne(institutionId);
  }
}
