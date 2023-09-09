import { Injectable } from '@nestjs/common';
import { SendMessageDto } from 'src/mongo/dto/session/SendMessageDto';
import {
  CreateSessionDto,
  ExposeDto,
} from 'src/mongo/dto/session/create-session.dto';
import { FindSessionDto } from 'src/mongo/dto/session/find-session.dto';
import { Expose, ExposeSchema } from 'src/mongo/schemas/session/session.schema';
import { MongoSessionService } from 'src/mongo/service/session/mongo-session.service';
import { MongoUserService } from 'src/mongo/service/user/mongo-user.service';

@Injectable()
export class SessionsService {
  constructor(
    private readonly mongoSessionService: MongoSessionService,
    private readonly mongoUserService: MongoUserService,
  ) {}
  async createSession(payload: CreateSessionDto) {
    const newSession = await this.mongoSessionService.createSession(payload);

    return newSession;
  }
  async updateSession(payload: any) {
    // const newSession = await this.mongoSessionService.createSession(payload);
    // console.log({ newSession });
    // return newSession;
  }
  async findSession(payload: FindSessionDto) {
    const session = await this.mongoSessionService.findSession(payload);
    return session;
  }

  async sendMessage(payload: SendMessageDto) {
    const { sessionId, ...data } = payload;
    const session = await this.mongoSessionService.updateSessionWithMessage(
      { _id: sessionId },
      data,
    );
    return session;
  }

  async findProfile(payload: { sessionId: string; viewerId: string }) {
    const { sessionId, viewerId } = payload;
    const session = await this.findSession({ _id: sessionId });

    const { owner, visitor, expose } = session;
    console.log({ owner, visitor });

    if (viewerId === visitor) {
      //The user who is viewing is the visitor
      //Show the entire profile of the owner
      const profile = await this.mongoUserService.getUser(
        { _id: owner },
        { userSessionId: 0, password: 0 },
      );
      return profile;
    } else if (viewerId === owner) {
      //The user who is viewing is the owner
      //show only the profile info as allowed in expose
      const profile = await this.mongoUserService.getUser(
        { _id: visitor },
        { userSessionId: 0, password: 0 },
      );
      const profileObject = profile.toObject ? profile.toObject() : profile;
      const exposedProfile = Object.keys(profileObject).reduce(
        (result, key) => {
          if (expose.hasOwnProperty(key) && expose[key] === true) {
            result[key] = profileObject[key];
          }
          return result;
        },
        {},
      );
      return exposedProfile;
    } else {
      throw Error('This user is not involved in the conversation');
    }
  }

  async findProfileAndUpdate(
    payload: ExposeDto,
    userId: string,
    sessionId: string,
  ) {
    const profile = await this.mongoSessionService.updateSession(
      { _id: sessionId },
      { expose: payload },
    );
    return profile;
  }
}
