import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      db: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT),
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    secret: {
      accessToken: process.env.SECRET_ACCESSTOKEN,
      refreshToken: process.env.SECRET_REFRESHTOKEN,
    },
    apiKeySendGrid: process.env.API_KEY_SENDGRID,
    emailOfCompany: process.env.EMAIL_OF_COMPANY,

    frontendHost: process.env.FRONTEND_HOST.endsWith('/')
      ? process.env.FRONTEND_HOST.slice(0, process.env.FRONTEND_HOST.length - 1)
      : process.env.FRONTEND_HOST,
  };
});
