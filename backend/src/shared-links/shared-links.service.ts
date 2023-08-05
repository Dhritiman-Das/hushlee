import { Injectable } from '@nestjs/common';
import { GetLinkDetailsDto } from 'src/mongo/dto/shared-links/GetLinkDetailsDto';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';
import { Session } from 'src/mongo/schemas/session/session.schema';
import { SharedLinks } from 'src/mongo/schemas/sharedLinks/sharedLinks.schema';
import { MongoCreateLinkService } from 'src/mongo/service/shared-links/mongo-shared-links.service';
import { SessionsService } from 'src/sessions/sessions.service';

export class SessionExistsError extends Error {
  public session: Session;

  constructor(message: string, session: Session) {
    super(message);
    this.session = session;
  }
}

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
  async enroll(payload: {
    linkId: string;
    visitor: string;
    linkDetails: SharedLinks;
  }) {
    const { linkId, visitor, linkDetails } = payload;
    const { owner, msgLimit, verified } = linkDetails;
    //First check if a session already exists between the visitorId and the ownerId
    const session = await this.sessionService.findSession({ owner, visitor });
    if (session) {
      throw new SessionExistsError('Session already exists', session);
    }
    //Else create a new session
    const newLink = await this.sessionService.createSession({
      owner,
      msgLimit,
      visitor,
    });

    return newLink;
  }
  async getDetails(payload: GetLinkDetailsDto) {
    const sharedLinkDocument = await this.mongoCreateLinkService.getLink(
      payload,
    );
    return sharedLinkDocument;
  }
}
