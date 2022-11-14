import { ConflictException, Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { RegisterDTO, UpdateDTO } from '../auth/dto/auth.dto';
import { UserRepository } from './repository/user.repository';
import { User } from './schema/user.schema';
import { hashData } from '../../utils/bcrypt.util';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  find = async () => {
    return await this.userRepository.find();
  };

  findOne = async (
    filter: FilterQuery<User>,
    projection?: Record<string, unknown>,
  ) => {
    return await this.userRepository.findOne(filter, { ...projection });
  };

  create = async (data: RegisterDTO) => {
    const findUser = await this.findOne({ email: data.email });
    if (findUser) throw new ConflictException('Email already exist.');
    data.password = await hashData(data.password);

    return await this.userRepository.create(data);
  };

  update = async (filter: FilterQuery<User>, data: UpdateDTO) => {
    return await this.userRepository.update(filter, data);
  };

  delete = async (filter: FilterQuery<User>) => {
    return await this.userRepository.delete(filter);
  };
}
