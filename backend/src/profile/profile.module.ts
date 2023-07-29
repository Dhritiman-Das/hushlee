import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { MongoProfileService } from 'src/mongo/service/profile/mongo-profile.service';
import { UserModule } from 'src/users/users.module';
import { MongoModule } from 'src/mongo/mongo.module';

@Module({
  imports: [],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
