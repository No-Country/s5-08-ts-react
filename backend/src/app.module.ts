import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { EventEmitterModule } from '@nestjs/event-emitter';
import config from './config';
import { enviroments } from './enviroments';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { InstitutionManagementModule } from './modules/institution-management/institution-management.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        SECRET_ACCESSTOKEN: Joi.string().required(),
        SECRET_REFRESHTOKEN: Joi.string().required(),
      }),
    }),
    EventEmitterModule.forRoot(),
    DatabaseModule,
    UserModule,
    AuthModule,
    NotificationsModule,
    InstitutionManagementModule,
  ],
})
export class AppModule {}
