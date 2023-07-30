import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsNotEmpty()
  owner: string; //userId of the owner
  @IsNumber()
  msgLimit: number;
  @IsBoolean()
  verified: boolean;
}
