import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { hashData } from '../../utils/bcrypt.util';
import { RegisterDTO, UpdateDTO } from '../auth/dto/auth.dto';
import { USER_REPOSITORY_KEY } from './repository/UserRepository.providers';
import { User } from './User.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_KEY)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: RegisterDTO) {
    const findUser = await this.userRepository.findOneBy({ email: data.email });
    if (findUser) throw new ConflictException('Email already exist.');
    data.password = await hashData(data.password);
    const user = this.userRepository.create(data);

    return await this.userRepository.save(user);
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  update = async (filter: any, data: UpdateDTO) => {
    return await this.userRepository.update(filter, data);
  };

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  /*  findOne = async (
    filter: FilterQuery<User>,
    projection?: Record<string, unknown>,
  ) => {
    return await this.userRepository.findOne(filter, { ...projection });
  }; 
  */

  /*

  update = async (filter: FilterQuery<User>, data: UpdateDTO) => {
    return await this.userRepository.update(filter, data);
  };

  delete = async (filter: FilterQuery<User>) => {
    return await this.userRepository.delete(filter);
  }; */
}
