import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAdminDto, CreateAdminResponseDto } from '../dtos/users.dto';
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
  ): Promise<CreateAdminResponseDto> {
    const { chargeOnInstitution, schedule, ...userData } = data;
    const user = await this.userServices.create({
      ...userData,
      role: Role.ADMIN,
      institutionId,
    });

    const adminProfile = this.adminRepository.create({
      chargeOnInstitution,
      schedule,
      userId: user.id,
    });
    await this.adminRepository.save(adminProfile);

    return { ...user, userId: user.id, ...adminProfile };
  }

  async findOne(userId: string) {
    const admin = await this.adminRepository.findOneBy({
      userId,
    });
    if (!admin) throw new NotFoundException(`UserAdmin not found`);

    return admin;
  }
}
