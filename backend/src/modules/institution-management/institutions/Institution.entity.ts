import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'institutions' })
export class Institution extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 350, nullable: true })
  location: string;

  @Column({ name: 'logo_url', nullable: true })
  logoUrl: string;
}
