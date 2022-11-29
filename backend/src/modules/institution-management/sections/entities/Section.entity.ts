import { BaseProperties } from '../../../database/Base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EducationLevel } from './EducationLevel.model';

@Entity({ name: 'sections' })
export class Section extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  degree: number;

  @Column({ name: 'letter_identifier' })
  letterIdentifier: string;

  @Column({ name: 'education_level' })
  educationLevel: EducationLevel;

  @Column({ type: 'uuid' })
  institutionId: string;
}
