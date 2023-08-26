import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  providers: [SessionsService, ProfileService],
  controllers: [SessionsController],
  exports: [SessionsService],
})
export class SessionsModule {}
