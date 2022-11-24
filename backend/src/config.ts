import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    msql: {
      db: process.env.MSQL_DB,
      port: parseInt(process.env.MSQL_PORT),
      host: process.env.MSQL_HOST,
      user: process.env.MSQL_USER,
      password: process.env.MSQL_PASSWORD,
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
