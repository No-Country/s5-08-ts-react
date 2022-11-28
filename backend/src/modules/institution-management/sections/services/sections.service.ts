import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  CreateSectionParams,
  SectionsFiltersDto,
  UpdateSectionDTO,
} from '../dtos/section.dto';
import { Section } from '../entities/Section.entity';
import { SECTION_REPOSITORY_KEY } from '../SectionRepository.provider';

@Injectable()
export class SectionService {
  constructor(
    @Inject(SECTION_REPOSITORY_KEY)
    private sectionRepositoy: Repository<Section>,
  ) {}

  async create(newSection: CreateSectionParams) {
    const sectionExist = await this.sectionRepositoy.findOneBy({
      institutionId: newSection.institutionId,
      degree: newSection.degree,
      educationLevel: newSection.educationLevel,
      letterIdentifier: newSection.letterIdentifier,
    });
    if (sectionExist) {
      throw new ConflictException('Section already exists');
    }

    const section = this.sectionRepositoy.create(newSection);
    return await this.sectionRepositoy.save(section);
  }

  async findAllBy(institutionId: string, filters: SectionsFiltersDto) {
    const sections = await this.sectionRepositoy.find({
      where: {
        institutionId,
        degree: filters.degree,
        educationLevel: filters.educationLevel,
      },
      order: { degree: 'ASC', letterIdentifier: 'ASC' },
    });

    return sections;
  }

  async update(id: string, data: UpdateSectionDTO) {
    const section = await this.sectionRepositoy.findOneBy({ id });
    if (!section) {
      throw new NotFoundException('Section not found');
    }

    await this.sectionRepositoy.update(id, data);
  }

  async delete(sectionId: string, institutionId: string) {
    const section = await this.sectionRepositoy.findOneBy({
      id: sectionId,
      institutionId,
    });
    if (!section) {
      throw new NotFoundException('Section not found');
    }

    await this.sectionRepositoy.delete(section.id);
  }
}
