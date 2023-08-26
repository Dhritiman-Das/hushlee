import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SessionExistsError, SharedLinksService } from './shared-links.service';
import { Request, Response } from 'express';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestWithUser } from 'src/auth/auth.interface';
import { ProfileService } from 'src/profile/profile.service';

@Controller('shared-links')
@UseGuards(AuthGuard)
export class SharedLinksController {
  constructor(private readonly sharedLinksService: SharedLinksService) {}
  @Post('create')
  async CreateSharedLink(
    @Body() payload: CreateLinkDto,
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    try {
      const owner = req.userId;
      //Create a new document in the shared-links collection
      const newLink = await this.sharedLinksService.createLink({
        ...payload,
        owner,
      });
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
    @Req() req: RequestWithUser,
  ) {
    //check if the user is logged in
    // ->if not logged in, then redirect them to the login and after complete bring them back here
    //check if the visitor is already chatting with the owner
    // ->if already chatting then redirect them to their existing convo
    //check if the author permissions are met
    // ->if permissions are not met then ask them to meet the permission requirements
    //start a session
    try {
      const visitor = req.userId;
      const verified = req.verified;
      const linkDetails = await this.sharedLinksService.getDetails({
        _id: linkId,
      });

      // const ownerId = await this.profileService.findUser()
      const session = await this.sharedLinksService.enroll({
        linkId,
        visitor,
        linkDetails,
        verified,
      });
      return res.json({ session });
    } catch (error) {
      if (error instanceof SessionExistsError) {
        return res.status(400).json({
          message: error.message,
          session: error.session,
        });
      }

      throw new InternalServerErrorException(error.message);
    }
  }
}
