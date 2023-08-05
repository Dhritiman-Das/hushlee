import { Module } from '@nestjs/common';
import { SharedLinksController } from './shared-links.controller';
import { SharedLinksService } from './shared-links.service';
import { SessionsService } from 'src/sessions/sessions.service';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  controllers: [SharedLinksController],
  providers: [SharedLinksService, SessionsService, ProfileService],
})
export class SharedLinksModule {}
