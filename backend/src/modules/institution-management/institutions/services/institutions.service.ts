import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Institution } from '../Institution.entity';
import { CreateInstitutionDto } from '../dtos/institutions.dto';
import { INSTITUTION_REPOSITORY_KEY } from '../InstitutionRepository.provider';

@Injectable()
export class InstitutionsService {
  constructor(
    @Inject(INSTITUTION_REPOSITORY_KEY)
    private institutionRepository: Repository<Institution>,
  ) {}

  async create(newInstitution: CreateInstitutionDto) {
    const institution = this.institutionRepository.create(newInstitution);
    return await this.institutionRepository.save(institution);
  }
}
