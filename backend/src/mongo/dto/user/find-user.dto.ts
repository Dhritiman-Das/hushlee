import { IsString, IsNotEmpty, IsUrl, ValidateNested } from 'class-validator';

export class FindUserDto {
  @IsString()
  readonly _id?: string;
  @IsString()
  readonly email?: string;
}
