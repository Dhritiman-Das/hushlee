import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { SharedLinksService } from './shared-links.service';
import { Response } from 'express';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';

@Controller('shared-links')
export class SharedLinksController {
  constructor(private readonly sharedLinksService: SharedLinksService) {}
  @Post('create')
  async CreateSharedLink(@Body() payload: CreateLinkDto, @Res() res: Response) {
    try {
      //Create a new document in the shared-links collection
      const newLink = await this.sharedLinksService.createLink(payload);
      //Return the _id of the document
      return res.json({ newLink });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('chat/:linkId')
  async EnrollSharedLink(
    @Param('linkId') linkId: string,
    @Res() res: Response,
  ) {
    //check if the user is logged in
    // ->if not logged in, then redirect them to the login and after complete bring them back here
    //check if the visitor is already chatting with the owner
    // ->if already chatting then redirect them to their existing convo
    //check if the author permissions are met
    // ->if permissions are not met then ask them to meet the permission requirements
    //start a session
    try {
      const createSession = await this.sharedLinksService.enroll({ linkId });
      console.log({ createSession });
      return res.json({ createSession });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
