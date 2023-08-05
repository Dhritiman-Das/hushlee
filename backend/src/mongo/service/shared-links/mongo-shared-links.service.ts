import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from 'src/mongo/dto/shared-links/create-link.dto';
import { FindLinkDto } from 'src/mongo/dto/shared-links/find-link.dto';
import { SharedLinks } from 'src/mongo/schemas/sharedLinks/sharedLinks.schema';

@Injectable()
export class MongoCreateLinkService {
  constructor(
    @InjectModel(SharedLinks.name)
    private readonly createLinkModel: Model<SharedLinks>,
  ) {}
  async getLink(
    query: FindLinkDto,
    projection: Object = {},
    options: Object = {},
  ) {
    try {
      const link = await this.createLinkModel
        .findOne(query, projection, options)
        .exec();
      console.log({ link, query });

      return link;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while getting Link: ' + error.message,
      );
    }
  }
  async createLink(payload: CreateLinkDto) {
    try {
      const newLink = new this.createLinkModel(payload);
      const newLinkSaved = await newLink.save();

      return newLinkSaved;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating new link: ' + error.message,
      );
    }
  }
}
