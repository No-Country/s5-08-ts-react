import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      uri: process.env.MONGO_URI,
      dbName: process.env.MONGO_DBNAME,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
    },
    secret: {
      accessToken: process.env.SECRET_ACCESSTOKEN,
      refreshToken: process.env.SECRET_REFRESHTOKEN,
    },
  };
});
