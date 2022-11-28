import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IncomingMessage } from 'http';
import config from '../../../config';
import { ROUTE_IS_PUBLIC_KEY } from '../decorators/routePublic.decorator';

@Injectable()
export class JwtAccessGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.get(
      ROUTE_IS_PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }

    const request = this.getRequest<
      IncomingMessage & { user?: Record<string, unknown> }
    >(context);
    try {
      const token = this.getToken(request);
      const user = this.jwtService.verify(token, {
        secret: this.configService.secret.accessToken,
      });
      request.user = user;
      return true;
    } catch (error) {
      //return false;
      throw new UnauthorizedException();
    }
  }

  protected getRequest<T>(context: ExecutionContext): T {
    return context.switchToHttp().getRequest();
  }

  protected getToken(request: {
    headers: Record<string, string | string[]>;
  }): string {
    const authorization = request.headers['authorization'];
    if (!authorization || Array.isArray(authorization)) {
      throw new Error('Invalid Authorization Header');
    }
    const [_, token] = authorization.split(' ');
    return token;
  }
}

@Injectable()
export class JwtRefreshGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = this.getRequest<
      IncomingMessage & { user?: Record<string, unknown>; token?: string }
    >(context);
    try {
      const token = this.getToken(request);
      const user = this.jwtService.verify(token, {
        secret: this.configService.secret.refreshToken,
      });
      request.token = token;
      request.user = user;
      return true;
    } catch (error) {
      return false;
    }
  }

  protected getRequest<T>(context: ExecutionContext): T {
    return context.switchToHttp().getRequest();
  }

  protected getToken(request: {
    headers: Record<string, string | string[]>;
  }): string {
    const authorization = request.headers['authorization'];
    if (!authorization || Array.isArray(authorization)) {
      throw new Error('Invalid Authorization Header');
    }
    const [_, token] = authorization.split(' ');
    return token;
  }
}
