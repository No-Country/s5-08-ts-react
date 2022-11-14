import { ObjectId } from 'mongoose';

export {};

declare global {
  namespace Express {
    export interface Request {
      user: {
        _id: ObjectId;
        name: string;
        email: string;
      };
      token: string;
    }
  }
}
