import { IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  sender: string;

  @IsNotEmpty()
  message: string;

  @IsOptional()
  createdAt?: Date;
}

export class ExposeDto {
  userSessionId?: boolean;
  userName?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  dob?: boolean;
  college?: boolean;
  hometown?: boolean;
  currentCity?: boolean;
  bio?: boolean;
  profilePic?: boolean;
}

export class CreateSessionDto {
  @IsNotEmpty()
  owner: string;

  @IsNotEmpty()
  visitor: string;

  @IsOptional()
  msgLimit?: number;

  @IsArray()
  @IsOptional()
  messages?: MessageDto[];

  @IsArray()
  @IsOptional()
  expose?: ExposeDto[];
}
