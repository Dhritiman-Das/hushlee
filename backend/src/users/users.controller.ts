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
  async signup(@Body() payload: SignupUserDto) {
    try {
      const user = await this.userService.signupUser(payload);
      return user;
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
  @Post('login')
  async login(@Body() payload: LoginUserDto) {
    try {
      const user = await this.userService.loginUser(payload);
      return user;
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
