import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY_KEY } from './repository/UserRepository.providers';
import { User } from './entities/User.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateUserDTO } from './dtos/users.dto';
import { UserCreatedEvent } from './events/user.events';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_KEY)
    private readonly userRepository: Repository<User>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(data: CreateUserDTO): Promise<User> {
    const findUser = await this.userRepository.findOneBy({ email: data.email });
    if (findUser) throw new ConflictException('Email already exist.');

    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    this.eventEmitter.emit(
      UserCreatedEvent.EVENT_NAME,
      new UserCreatedEvent({ ...userSaved }),
    );

    return userSaved;
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(filters: { id?: string; email?: string }): Promise<User> {
    const user = await this.userRepository.findOneBy({
      id: filters.id,
      email: filters.email,
    });
    if (!user) throw new NotFoundException(`User not found`);

    return user;
  }
}
