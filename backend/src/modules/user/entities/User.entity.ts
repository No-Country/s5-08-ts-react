import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseProperties } from '../../database/Base.entity';

@Entity({ name: 'users' })
export class User extends BaseProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  firstName: string;

  @Column({ length: 250 })
  lastName: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250 })
  phone: string;

  @Column({ length: 50 })
  role: string;

  /*@Column({ length: 250 })
  password: string;

  @Column({ length: 250, nullable: true, name: 'refresh_password_code' })
  resetPasswordCode: string;

  @Column({ length: 250, nullable: true, name: 'refresh_token_hash' })
  refreshTokenHash: string;*/
}
