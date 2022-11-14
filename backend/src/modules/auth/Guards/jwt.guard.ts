import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { IncomingMessage } from 'http';
import config from '../../../config';

@Injectable()
export class JwtAccessGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  canActivate(context: ExecutionContext): boolean {
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