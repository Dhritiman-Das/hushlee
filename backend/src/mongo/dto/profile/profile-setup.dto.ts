import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class ProfileSetupDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsDateString()
  dob: Date;
  @IsString()
  college: string;
  @IsString()
  hometown: string;
  @IsString()
  currentCity: string;
  @IsString()
  bio: string;
  @IsString()
  profilePic: string;
}
