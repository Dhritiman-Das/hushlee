import { Body, Controller, Put, Res } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileSetupDto } from 'src/mongo/dto/profile/profile-setup.dto';
import { Response } from 'express';

@Controller('user/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Put('setup')
  async profileSetup(@Body() payload: ProfileSetupDto, @Res() res: Response) {
    try {
      const userProfile = await this.profileService.updateUser(payload);
      return res.json({ userProfile });
    } catch (error) {
      throw new Error();
    }
  }
}
