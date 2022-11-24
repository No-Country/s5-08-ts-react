import { SetMetadata } from '@nestjs/common';
import { Role as Role } from 'src/modules/user/models/Roles.model';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
