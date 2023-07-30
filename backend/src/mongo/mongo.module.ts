import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user/user.schema';
import { MongoUserService } from './service/user/mongo-user.service';
import { MongoProfileService } from './service/profile/mongo-profile.service';
import {
  SharedLinks,
  SharedLinksSchema,
} from './schemas/sharedLinks/sharedLinks.schema';
import { MongoCreateLinkService } from './service/shared-links/mongo-shared-links.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: SharedLinks.name, schema: SharedLinksSchema },
    ]),
  ],
  providers: [MongoUserService, MongoProfileService, MongoCreateLinkService],
  exports: [MongoUserService, MongoProfileService, MongoCreateLinkService],
})
export class MongoModule {}
