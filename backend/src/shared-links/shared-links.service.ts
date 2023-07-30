import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';
import { MongoCreateLinkService } from 'src/mongo/service/shared-links/mongo-shared-links.service';

@Injectable()
export class SharedLinksService {
  constructor(
    private readonly mongoCreateLinkService: MongoCreateLinkService,
  ) {}
  async createLink(payload: CreateLinkDto) {
    console.log({ payload });

    const newLink = await this.mongoCreateLinkService.createLink(payload);
    console.log({ newLink });

    return newLink;
  }
}
