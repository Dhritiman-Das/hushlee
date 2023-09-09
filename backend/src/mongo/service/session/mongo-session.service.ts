import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SendMessageDto } from 'src/mongo/dto/session/SendMessageDto';
import { CreateSessionDto } from 'src/mongo/dto/session/create-session.dto';
import { FindSessionDto } from 'src/mongo/dto/session/find-session.dto';
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
  ) {
    try {
      const session = await this.sessionModel
        .findOneAndUpdate(query, updateData, { ...options, new: true }) // new: true returns the updated document
        .exec();

      return session;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while updating session: ' + error.message,
      );
    }
  }
  async findSession(query: FindSessionDto) {
    const session = await this.sessionModel.findOne(query).exec();
    if (!session) {
      return null;
    }
    return session.toObject();
  }

  async updateSessionWithMessage(
    query: any,
    newMessage: { senderId: string; message: string },
    options: Object = {},
  ) {
    try {
      console.log({ query, newMessage });

      const updatedSession = await this.sessionModel
        .findOneAndUpdate(
          query,
          { $push: { messages: newMessage } }, // Use $push to add new message to messages array
          { ...options, new: true }, // new: true returns the updated document
        )
        .exec();

      return updatedSession;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while updating session: ' + error.message,
      );
    }
  }
}
