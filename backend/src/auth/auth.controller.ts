import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignupUserDto } from 'src/mongo/dto/user/signup-user.dto';
import { LoginUserDto } from 'src/mongo/dto/user/login-user.dto';

@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Body() payload: SignupUserDto, @Res() res: Response) {
    try {
      const { response, userSessionId } = await this.authService.signupUser(
        payload,
      );
      res.cookie('usid', userSessionId, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      return res.json(response);
    } catch (error) {
      if (error.message === 'User already exists') {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  @Post('login')
  async login(@Body() payload: LoginUserDto, @Res() res: Response) {
    try {
      const { response, userSessionId } = await this.authService.loginUser(
        payload,
      );
      res.cookie('usid', userSessionId, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      throw error;
    }
  }
}
