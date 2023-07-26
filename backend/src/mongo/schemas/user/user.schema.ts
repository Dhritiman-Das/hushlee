import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'User' })
export class User {
  @Prop({ required: true })
  userSessionId: string;
  @Prop({ required: true })
  userName: string;
  @Prop({ required: false })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, default: false })
  verified: boolean;
  @Prop({ required: true, default: false })
  setupComplete: boolean;
  @Prop({ required: false })
  firstName: string;
  @Prop({ required: false })
  lastName: string;
  @Prop({ required: false })
  dob: Date;
  @Prop({ required: false })
  college: string;
  @Prop({ required: false })
  hometown: string;
  @Prop({ required: false })
  currentCity: string;
  @Prop({ required: false })
  bio: string;
  @Prop({ required: false })
  profilePic: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
