import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, unique: true })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ type: String, default: null })
  resetPasswordCode: string;

  @Prop({ type: String, default: null })
  refreshTokenHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
