import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Res,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Response } from 'express';

@Controller('session')
export class SessionsController {
  constructor(private readonly sessionService: SessionsService) {}
  @Post('create')
  async CreateSharedLink(@Body() payload: any, @Res() res: Response) {
    try {
      //Create a new document in the shared-links collection
      const newSession = await this.sessionService.createSession(payload);
      //Return the _id of the document
      return res.json({ newSession });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
