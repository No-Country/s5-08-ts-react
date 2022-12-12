import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';
import { Location } from '../models/users.model';

@Entity({ name: 'users' })
export class User extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  firstName: string;

  @Column({ length: 250 })
  lastName: string;

  @Column({ length: 50, unique: true })
  dni: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250 })
  phone: string;

  @Column({ type: 'json' })
  location: Location;

  @Column({ type: 'uuid' })
  institutionId: string;

  @Column({ length: 50 })
  role: string;
}
