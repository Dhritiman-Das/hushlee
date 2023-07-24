import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/mongo/dto/user/create-user.dto';
import { FindUserDto } from 'src/mongo/dto/user/find-user.dto';
import { User } from 'src/mongo/schemas/user/user.schema';

@Injectable()
export class MongoUserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async getUser(
    query: FindUserDto,
    projection: Object = {},
    options: Object = { lean: true },
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
  async createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = new this.userModel(createUserDto);
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating user: ' + error.message,
      );
    }
  }
}
