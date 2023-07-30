import {
  Body,
  Controller,
  InternalServerErrorException,
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

      return res.json({ newLink });
      //Return the _id of the document
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Post('enroll')
  async EnrollSharedLink(@Body() payload: any, @Res() res: Response) {
    //check if the user is logged in
    // ->if not logged in, then redirect them to the login and after complete bring them back here
    //check if the visitor is already chatting with the owner
    // ->if already chatting then redirect them to their existing convo
    //check if the author permissions are met
    // ->if permissions are not met then
    //start a session
  }
}
