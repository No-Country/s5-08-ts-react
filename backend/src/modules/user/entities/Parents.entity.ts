import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';
import { EmergencyContact, StudentOnCharge } from '../models/parent.model';
import { User } from './User.entity';

@Entity({ name: 'parents' })
export class Parent extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'jsonb' })
  emergencyContact: EmergencyContact;

  @Column({ type: 'jsonb' })
  studentsOnCharge: StudentOnCharge[];

  @OneToOne(() => User, { eager: true, cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User;
}
