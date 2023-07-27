import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginUserDto } from 'src/mongo/dto/user/login-user.dto';
import { SignupUserDto } from 'src/mongo/dto/user/signup-user.dto';
import { MongoUserService } from 'src/mongo/service/user/mongo-user.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly mongoUserService: MongoUserService) {}
  async signupUser(payload: SignupUserDto) {
    const { userName } = payload;
    const existingUser = await this.mongoUserService.getUser({ userName });

    if (existingUser) {
      // throw a domain-specific exception, not an HTTP-specific one
      throw new Error('User already exists');
    }

    const newUser = await this.mongoUserService.createUser(payload);

    return {
      _id: newUser._id,
      setupComplete: newUser.setupComplete,
      verified: newUser.verified,
      userSessionId: newUser.userSessionId,
    };
  }

  async loginUser(payload: LoginUserDto) {
    const { userName, password } = payload;
    const user = await this.mongoUserService.getUser({
      userName,
      password,
    });
    if (!user) {
      throw new Error('Invalid email or password.');
    }
    let userSessionId = uuidv4();
    Object.assign(user, { userSessionId });
    const updatedUser = await user.save();
    return {
      _id: updatedUser._id,
      setupComplete: updatedUser.setupComplete,
      verified: updatedUser.verified,
      userSessionId: updatedUser.userSessionId,
    };
  }
}
