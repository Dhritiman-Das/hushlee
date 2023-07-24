import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoUserService } from 'src/mongo/service/user/mongo-user.service';

@Injectable()
export class UserService {
  constructor(private readonly mongoUserService: MongoUserService) {}
  async createUser(createUserDto: any) {
    try {
      const { email } = createUserDto;
      const existingUser = await this.mongoUserService.getUser({ email });
      if (existingUser) {
        //return userId if an user is already associated with the given user email
        return {
          userId: existingUser._id,
          setupComplete: existingUser.setupComplete,
        };
      } else {
        //user is not found then create an user and return the userId
        const newUser = await this.mongoUserService.createUser(createUserDto);
        return {
          userId: newUser._id,
          setupComplete: newUser.setupComplete,
        };
      }
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating user: ' + error.message,
      );
    }
  }
}
