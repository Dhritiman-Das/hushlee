import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { SharedLinksModule } from './shared-links/shared-links.module';
import { SessionsModule } from './sessions/sessions.module';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoModule,
    UserModule,
    ProfileModule,
    SharedLinksModule,
    SessionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
