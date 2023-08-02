import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from 'src/mongo/dto/session/create-session.dto';
import { Session } from 'src/mongo/schemas/session/session.schema';

@Injectable()
export class MongoSessionService {
  constructor(
    @InjectModel(Session.name) private readonly sessionModel: Model<Session>,
  ) {}
  async createSession(payload: CreateSessionDto) {
    console.log(payload);

    const newSession = new this.sessionModel(payload);
    const newSession_saved = await newSession.save();
    return newSession_saved;
  }
  async updateSession(
    query: any,
    updateData: Partial<Session>,
    options: Object = {},
  ) {}
}
