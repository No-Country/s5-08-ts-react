import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseProperties } from '../database/Base.entity';
import { User } from '../user/entities/User.entity';

@Entity({ name: 'users_auth' })
export class UserAuth extends BaseProperties {
  @Column({ length: 250 })
  password: string;

  @Column({ length: 250, nullable: true, name: 'refresh_token_hash' })
  refreshTokenHash: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
