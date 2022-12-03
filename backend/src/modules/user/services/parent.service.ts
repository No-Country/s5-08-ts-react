import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateParentDto, UpdateParentDTO } from '../dtos/parent.dto';
import { Parent } from '../entities/Parents.entity';
import { Role } from '../models/Roles.model';
import { PARENT_REPOSITORY_KEY } from '../repository/UserRepository.providers';
import { UserService } from '../user.service';

@Injectable()
export class ParentService {
  constructor(
    private readonly userServices: UserService,
    @Inject(PARENT_REPOSITORY_KEY)
    private readonly parentRepository: Repository<Parent>,
  ) {}

  async createParent(
    institutionId: string,
    data: CreateParentDto,
  ): Promise<Parent> {
    const { emergencyContact, studentsOnCharge, ...userData } = data;
    const user = await this.userServices.create({
      ...userData,
      role: Role.PARENTS,
      institutionId,
    });

    const parent = this.parentRepository.create({
      user: { id: user.id },
      emergencyContact,
      studentsOnCharge,
    });

    await this.parentRepository.save(parent);

    return { ...parent, user };
  }

  async update(
    institutionId: string,
    id: string,
    data: UpdateParentDTO,
  ): Promise<Parent> {
    const { emergencyContact, studentsOnCharge, ...userData } = data;
    const parent = await this.findOne({ id });
    if (parent.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }

    this.parentRepository.merge(parent, {
      user: userData,
      emergencyContact,
      studentsOnCharge: parent.studentsOnCharge.concat(studentsOnCharge),
    });

    await this.parentRepository.save(parent);

    return parent;
  }

  async findOne(filter: { id?: string; userId?: string }): Promise<Parent> {
    const parent = await this.parentRepository.findOneBy({
      user: { id: filter.userId },
      id: filter.id,
    });
    if (!parent) throw new NotFoundException(`Parent not found`);

    return parent;
  }

  async findAll(institutionId: string): Promise<Parent[]> {
    const parents = await this.parentRepository.findBy({
      user: { institutionId },
    });

    return parents;
  }

  async delete(id: string, institutionId: string): Promise<void> {
    const parent = await this.findOne({ id });
    if (parent.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }
    await this.parentRepository.delete({ id: parent.id });
  }
}
