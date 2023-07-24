import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user/user.schema';
import { MongoUserService } from './service/user/mongo-user.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [MongoUserService],
  exports: [MongoUserService],
})
export class MongoModule {}
