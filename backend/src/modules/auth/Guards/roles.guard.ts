import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Role } from 'src/modules/user/models/Roles.model';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    if (!roles) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user;
    const isAuht = roles.includes(user.role as Role);
    if (!isAuht) throw new ForbiddenException('your role is wrong');

    return isAuht;
  }
}
