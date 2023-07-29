import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user/user.schema';
import { MongoUserService } from './service/user/mongo-user.service';
import { MongoProfileService } from './service/profile/mongo-profile.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [MongoUserService, MongoProfileService],
  exports: [MongoUserService, MongoProfileService],
})
export class MongoModule {}
