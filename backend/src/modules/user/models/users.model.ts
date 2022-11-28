import { CreateUserDTO } from '../dtos/users.dto';

export interface UserProperties {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  institutionId: string;
  createAt: Date;
  updateAt: Date;
}
