import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';
import { User } from './User.entity';

@Entity({ name: 'admins' })
export class Admin extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  chargeOnInstitution: string;

  @Column({ length: 50 })
  schedule: string;

  @OneToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User;
}
