import { Injectable } from '@nestjs/common';
import { ProfileSetupDto } from 'src/mongo/dto/profile/profile-setup.dto';
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
}
