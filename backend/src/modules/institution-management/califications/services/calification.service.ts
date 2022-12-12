import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CALIFICATION_REPOSITORY_KEY } from '../CalificationResitory.provider';
import {
  CreateCalificationGroupDto,
  UpdatetCalificationDto,
} from '../dtos/calification.dto';
import { Calification } from '../entities/calification.entity';

@Injectable()
export class CalificationService {
  constructor(
    @Inject(CALIFICATION_REPOSITORY_KEY)
    private calificationRepository: Repository<Calification>,
  ) {}

  async create(data: CreateCalificationGroupDto) {
    const calification = this.calificationRepository.create({
      ...data,
      subject: { id: data.subjetId },
    });
    return await this.calificationRepository.save(calification);
  }

  async update(id: string, data: UpdatetCalificationDto) {
    const calification = await this.findOne(id);
    calification.evaluations = data.evaluations;
    return await this.calificationRepository.save(calification);
  }

  async findOne(id: string) {
    const calification = await this.calificationRepository.findOneBy({ id });
    if (!calification) {
      throw new NotFoundException(`Calification not found`);
    }

    return calification;
  }

  async findAllByStudent(studentId: string, lapseNumber?: number) {
    const califications = await this.calificationRepository.findBy({
      studentId,
      lapseNumber,
    });

    return califications;
  }
}
