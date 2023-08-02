import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';
import { MongoCreateLinkService } from 'src/mongo/service/shared-links/mongo-shared-links.service';
import { SessionsService } from 'src/sessions/sessions.service';

@Injectable()
export class SharedLinksService {
  constructor(
    private readonly mongoCreateLinkService: MongoCreateLinkService,
    private readonly sessionService: SessionsService,
  ) {}
  async createLink(payload: CreateLinkDto) {
    const newLink = await this.mongoCreateLinkService.createLink(payload);
    console.log({ newLink });

    return newLink;
  }
  async enroll(payload: { linkId: string }) {
    const { linkId } = payload;
    const sharedLinkDocument = await this.mongoCreateLinkService.getLink({
      _id: linkId,
    });
    const { owner, msgLimit, verified } = sharedLinkDocument;
    const newLink = await this.sessionService.createSession({
      owner,
      msgLimit,
      visitor: 'visitorId',
    });
    console.log({ newLink });

    return newLink;
  }
  async getDetails(payload: { linkId: string }) {
    const { linkId } = payload;
    const sharedLinkDocument = await this.mongoCreateLinkService.getLink({
      _id: linkId,
    });
    return sharedLinkDocument;
  }
}
