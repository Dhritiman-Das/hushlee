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
import { Session, SessionSchema } from './schemas/session/session.schema';
import { MongoSessionService } from './service/session/mongo-session.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: SharedLinks.name, schema: SharedLinksSchema },
    ]),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
  ],
  providers: [
    MongoUserService,
    MongoProfileService,
    MongoCreateLinkService,
    MongoSessionService,
  ],
  exports: [
    MongoUserService,
    MongoProfileService,
    MongoCreateLinkService,
    MongoSessionService,
  ],
})
export class MongoModule {}
