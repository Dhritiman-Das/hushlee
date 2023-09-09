import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsNotEmpty()
  owner: string; //userId of the owner
  @IsString()
  name: string; //name of the link
  @IsNumber()
  msgLimit: number;
  @IsBoolean()
  verified: boolean;
}
