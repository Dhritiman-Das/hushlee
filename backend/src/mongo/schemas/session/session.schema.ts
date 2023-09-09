import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Message {
  @Prop({ required: true })
  senderId: string; //userId of the sender
  @Prop({ required: true })
  message: string;
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
@Schema({ _id: false })
export class Expose {
  @Prop({ default: false })
  userName?: boolean;
  @Prop({ default: false })
  firstName?: boolean;
  @Prop({ default: false })
  lastName?: boolean;
  @Prop({ default: false })
  dob?: boolean;
  @Prop({ default: false })
  college?: boolean;
  @Prop({ default: false })
  hometown?: boolean;
  @Prop({ default: false })
  currentCity?: boolean;
  @Prop({ default: false })
  bio?: boolean;
  @Prop({ default: false })
  profilePic?: boolean;
}

export const ExposeSchema = SchemaFactory.createForClass(Expose);

@Schema({ collection: 'Sessions' })
export class Session extends Document {
  @Prop({ required: true })
  callerLink: string;
  @Prop({ required: true })
  owner: string;
  @Prop({ required: true })
  visitor: string;
  @Prop({ required: false, default: 30 })
  msgLimit: number;
  @Prop({ required: false, default: [], type: [MessageSchema] })
  messages: Message[];
  @Prop({ required: false, type: ExposeSchema, default: new Expose() })
  expose: Expose;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
