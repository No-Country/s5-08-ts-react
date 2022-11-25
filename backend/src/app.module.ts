import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';

import { UserModule } from './modules/user/user.module';
import { enviroments } from './enviroments';
import config from './config';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { InstitutionManagementModule } from './modules/institution-management/institution-management.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        MSQL_DB: Joi.string().required(),
        MSQL_HOST: Joi.string().required(),
        MSQL_PORT: Joi.number().required(),
        MSQL_USER: Joi.string().required(),
        MSQL_PASSWORD: Joi.string().required(),
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
