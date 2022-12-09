import { EmergencyContact } from '../../user/models/parent.model';
import { Location } from '../../user/models/users.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'students' })
export class Student extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  names: string;

  @Column()
  surnames: string;

  @Column({ length: 50, unique: true, nullable: true })
  dni: string;

  @Column({ length: 250, unique: true, nullable: true })
  email: string;

  @Column({ length: 250, nullable: true })
  phone: string;

  @Column({ type: 'jsonb' })
  location: Location;

  @Column({ type: 'jsonb' })
  emergencyContact: EmergencyContact;

  @Column({ type: 'uuid' })
  sectionId: string;

  @Column({ type: 'uuid' })
  parentId: string;

  @Column({ type: 'uuid' })
  institutionId: string;
}
