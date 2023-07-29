import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileSetupDto } from 'src/mongo/dto/profile/profile-setup.dto';
import { FindUserDto } from 'src/mongo/dto/user/find-user.dto';
import { User } from 'src/mongo/schemas/user/user.schema';

@Injectable()
export class MongoProfileService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async updateProfile(
    query: FindUserDto,
    updateData: Partial<User>,
    options: Object = {},
  ) {
    try {
      const user = await this.userModel
        .findOneAndUpdate(query, updateData, { ...options, new: true }) // new: true returns the updated document
        .exec();

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while updating user: ' + error.message,
      );
    }
  }
}
