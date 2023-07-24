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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      console.log({ createUserDto });

      const user = await this.userService.createUser(createUserDto);
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
