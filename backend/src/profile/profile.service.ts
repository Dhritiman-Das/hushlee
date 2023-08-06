import { Injectable } from '@nestjs/common';
import { ProfileSetupDto } from 'src/mongo/dto/profile/profile-setup.dto';
import { FindUserDto } from 'src/mongo/dto/user/find-user.dto';
import { MongoProfileService } from 'src/mongo/service/profile/mongo-profile.service';

@Injectable()
export class ProfileService {
  constructor(private readonly mongoProfileService: MongoProfileService) {}
  async updateUser(payload: ProfileSetupDto) {
    const { userId, ...data } = payload;

    const updatedUser = await this.mongoProfileService.updateProfile(
      { _id: userId },
      data,
    );

    return updatedUser;
  }
  async findUser(payload: FindUserDto) {
    const user = await this.mongoProfileService.findUser(payload);
    return user;
  }
}
