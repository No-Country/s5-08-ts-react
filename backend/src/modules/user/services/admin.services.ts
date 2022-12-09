import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAdminDto, UpdateAdminDTO } from '../dtos/users.dto';
import { Admin } from '../entities/Admin.entity';
import { Role } from '../models/Roles.model';
import { ADMIN_REPOSITORY_KEY } from '../repository/UserRepository.providers';
import { UserService } from '../user.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly userServices: UserService,
    @Inject(ADMIN_REPOSITORY_KEY)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async createAdmin(
    institutionId: string,
    data: CreateAdminDto,
  ): Promise<Admin> {
    const { chargeOnInstitution, schedule, ...userData } = data;
    const user = await this.userServices.create({
      ...userData,
      role: Role.ADMIN,
      institutionId,
    });

    const adminProfile = this.adminRepository.create({
      chargeOnInstitution,
      schedule,
      user: { id: user.id },
    });
    await this.adminRepository.save(adminProfile);

    return { ...adminProfile, user };
  }

  async updateAdmin(
    institutionId: string,
    id: string,
    data: UpdateAdminDTO,
  ): Promise<Admin> {
    const { chargeOnInstitution, schedule, ...userData } = data;
    const admin = await this.findOne({ id });
    if (admin.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }

    this.adminRepository.merge(admin, {
      user: userData,
      chargeOnInstitution,
      schedule,
    });

    await this.adminRepository.save(admin);

    return admin;
  }

  async findOne(filter: { id?: string; userId?: string }) {
    const admin = await this.adminRepository.findOneBy({
      id: filter.id,
      user: { id: filter.userId },
    });
    if (!admin) throw new NotFoundException(`UserAdmin not found`);

    return admin;
  }

  async findAll(institutionId: string): Promise<Admin[]> {
    const teacher = await this.adminRepository.findBy({
      user: { institutionId },
    });

    return teacher;
  }

  async delete(id: string, institutionId: string): Promise<void> {
    const admin = await this.findOne({ id });
    if (admin.user.institutionId !== institutionId) {
      throw new ForbiddenException();
    }
    await this.adminRepository.delete({ id: admin.id });
  }
}
