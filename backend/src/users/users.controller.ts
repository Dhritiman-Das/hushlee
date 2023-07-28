import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from 'src/mongo/dto/user/create-user.dto';
import { Response } from 'express';
import { SignupUserDto } from 'src/mongo/dto/user/signup-user.dto';
import { LoginUserDto } from 'src/mongo/dto/user/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  async signup(@Body() payload: SignupUserDto, @Res() res: Response) {
    try {
      const { response, userSessionId } = await this.userService.signupUser(
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
      const { response, userSessionId } = await this.userService.loginUser(
        payload,
      );
      res.cookie('usid', userSessionId, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      });
      return res.json(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
