import { Module } from '@nestjs/common';
import { SharedLinksController } from './shared-links.controller';
import { SharedLinksService } from './shared-links.service';
import { SessionsService } from 'src/sessions/sessions.service';

@Module({
  controllers: [SharedLinksController],
  providers: [SharedLinksService, SessionsService],
})
export class SharedLinksModule {}
