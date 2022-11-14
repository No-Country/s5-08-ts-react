// import * as bcrypt from 'bcrypt';
// import * as bcryptjs from 'bcryptjs';
import * as argon2 from 'argon2';

export const hashData = async (data: string) => {
  // const salt = await bcryptjs.genSalt(10);
  // return await bcryptjs.hash(data);
  return await argon2.hash(data);
};

export const compareData = async (data: string, hash: string) => {
  // return await bcrypt.compare(data,hash)
  return await argon2.verify(hash, data);
};
