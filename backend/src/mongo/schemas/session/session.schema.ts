import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Message {
  @Prop({ required: true })
  sender: string; //userId of the sender
  @Prop({ required: true })
  message: string;
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
@Schema({ _id: false })
export class Expose {
  @Prop()
  userSessionId: boolean;
  @Prop()
  userName: boolean;
  @Prop()
  firstName: boolean;
  @Prop()
  lastName: boolean;
  @Prop()
  dob: boolean;
  @Prop()
  college: boolean;
  @Prop()
  hometown: boolean;
  @Prop()
  currentCity: boolean;
  @Prop()
  bio: boolean;
  @Prop()
  profilePic: boolean;
}

export const ExposeSchema = SchemaFactory.createForClass(Expose);

@Schema({ collection: 'Sessions' })
export class Session {
  @Prop({ required: true })
  owner: string;
  @Prop({ required: true })
  visitor: string;
  @Prop({ required: false, default: 30 })
  msgLimit: number;
  @Prop({ required: false, default: [], type: [MessageSchema] })
  messages: Message[];
  @Prop({ required: false, default: [], type: [ExposeSchema] })
  expose: Expose[];
}

export const SessionSchema = SchemaFactory.createForClass(Session);
