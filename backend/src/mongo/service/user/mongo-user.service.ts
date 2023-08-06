import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from 'src/mongo/dto/user/create-user.dto';
import { FindUserDto } from 'src/mongo/dto/user/find-user.dto';
import { SignupUserDto } from 'src/mongo/dto/user/signup-user.dto';
import { User } from 'src/mongo/schemas/user/user.schema';

@Injectable()
export class MongoUserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async getUser(
    query: FindUserDto,
    projection: Object = {},
    options: Object = {},
  ) {
    try {
      const user = await this.userModel
        .findOne(query, projection, options)
        .exec();
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while getting user: ' + error.message,
      );
    }
  }
  async createUser(payload: SignupUserDto) {
    try {
      let userSessionId = uuidv4();
      const newUser = new this.userModel({ ...payload, userSessionId });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating user: ' + error.message,
      );
    }
  }
  async updateUser(
    query: FindUserDto,
    updateData: Partial<User>,
    options: Object = {},
  ) {
    try {
      const user = await this.userModel
        .findOneAndUpdate(query, updateData, { ...options, new: true }) // new: true returns the updated document
        .exec();
      console.log({ user });

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while updating user: ' + error.message,
      );
    }
  }
}
