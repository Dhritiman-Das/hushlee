import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Response } from 'express';
import { RequestWithUser } from 'src/auth/auth.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { ExposeDto } from 'src/mongo/dto/session/create-session.dto';

@Controller('session')
@UseGuards(AuthGuard)
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
  @Post('chat')
  async Chat(
    @Body() payload: { sessionId: string; message: string },
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    try {
      const senderId = req.userId;
      console.log({
        ...payload,
        senderId,
      });

      const chatObj = await this.sessionService.sendMessage({
        ...payload,
        senderId,
      });
      return res.json({ data: chatObj });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Get('profile/:sessionId')
  async ProfileInfo(
    @Param() param: { sessionId: string },
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    try {
      const viewerId = req.userId;
      const { sessionId } = param;

      const profile = await this.sessionService.findProfile({
        sessionId,
        viewerId,
      });
      return res.json({ profile });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Put('profile/expose/:sessionId')
  async exposeProfile(
    @Body() payload: ExposeDto,
    @Param() param: { sessionId: string },
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    try {
      const userId = req.userId;
      const { sessionId } = param;
      const profile = await this.sessionService.findProfileAndUpdate(
        payload,
        userId,
        sessionId,
      );
      res.json({ profile });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
