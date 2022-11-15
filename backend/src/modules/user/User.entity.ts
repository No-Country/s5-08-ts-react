import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ length: 250, nullable: true, name: 'refresh_password_code' })
  resetPasswordCode: string;

  @Column({ length: 250, nullable: true, name: 'refresh_token_hash' })
  refreshTokenHash: string;
}
