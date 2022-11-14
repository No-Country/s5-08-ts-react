import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';

import { UserModule } from './modules/user/user.module';
import { enviroments } from './enviroments';
import config from './config';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        MONGO_DBNAME: Joi.string().required(),
        MONGO_USER: Joi.string().required(),
        MONGO_PASS: Joi.string().required(),
        SECRET_ACCESSTOKEN: Joi.string().required(),
        SECRET_REFRESHTOKEN: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
