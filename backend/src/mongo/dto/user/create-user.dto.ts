import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly verified: boolean;

  @IsBoolean()
  @IsNotEmpty()
  readonly setupComplete: boolean;

  @IsString()
  readonly password: string;

  @IsDate()
  @IsOptional()
  readonly dob?: Date;

  @IsString()
  @IsOptional()
  readonly college?: string;

  @IsString()
  @IsOptional()
  readonly hometown?: string;

  @IsString()
  @IsOptional()
  readonly currentCity?: string;

  @IsString()
  @IsOptional()
  readonly bio?: string;

  @IsString()
  @IsOptional()
  readonly profilePic?: string;
}
