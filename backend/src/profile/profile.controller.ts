import { Body, Controller, Put, Req, Res, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileSetupDto } from 'src/mongo/dto/profile/profile-setup.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestWithUser } from 'src/auth/auth.interface';

@Controller('user/profile')
@UseGuards(AuthGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Put('setup')
  async profileSetup(
    @Body() payload: ProfileSetupDto,
    @Req() req: RequestWithUser,
    @Res() res: Response,
  ) {
    try {
      const userId = req.userId;
      const userProfile = await this.profileService.updateUser({
        ...payload,
        userId,
      });
      return res.json({ userProfile });
    } catch (error) {
      throw new Error();
    }
  }
}
