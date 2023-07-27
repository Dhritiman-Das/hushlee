import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
