import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateInstitutionDto } from '../dtos/institutions.dto';
import { InstitutionsService } from '../services/institutions.service';

@ApiTags('Institutions')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionServices: InstitutionsService) {}

  @Post()
  register(@Body() newInstitution: CreateInstitutionDto) {
    return this.institutionServices.create(newInstitution);
  }
}
