import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from 'src/mongo/dto/session/create-session.dto';
import { MongoSessionService } from 'src/mongo/service/session/mongo-session.service';

@Injectable()
export class SessionsService {
  constructor(private readonly mongoSessionService: MongoSessionService) {}
  async createSession(payload: CreateSessionDto) {
    const newSession = await this.mongoSessionService.createSession(payload);
    console.log({ newSession });

    return newSession;
  }
  async updateSession(payload: any) {
    // const newSession = await this.mongoSessionService.createSession(payload);
    // console.log({ newSession });
    // return newSession;
  }
}
