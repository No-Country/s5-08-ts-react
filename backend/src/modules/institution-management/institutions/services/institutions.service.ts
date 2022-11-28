import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Institution } from '../Institution.entity';
import {
  CreateInstitutionDto,
  UpdateInstitutionDto,
} from '../dtos/institutions.dto';
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

  async update(id: string, data: UpdateInstitutionDto) {
    const institution = await this.findOne(id);
    await this.institutionRepository.update({ id: institution.id }, data);
  }

  async findOne(id: string) {
    const institution = await this.institutionRepository.findOneBy({ id });
    if (!institution) {
      throw new NotFoundException(`Institution not found`);
    }

    return institution;
  }
}
