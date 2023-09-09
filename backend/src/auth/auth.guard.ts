import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly profileService: ProfileService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const sessionId = request.cookies['usid'];

    return this.validateSession(sessionId, request);
  }
  async validateSession(sessionId: string, request): Promise<boolean> {
    try {
      console.log({ sessionId });
      const user = await this.profileService.findUser({
        userSessionId: sessionId,
      });
      console.log({ user });

      if (!user) {
        throw new UnauthorizedException();
      }

      // Attach the user's id to the request object
      request.userId = user._id.toString();
      request.verified = user.verified;

      return true;
    } catch (error) {}
  }
}
