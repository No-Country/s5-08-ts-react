import { Document, ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
}
