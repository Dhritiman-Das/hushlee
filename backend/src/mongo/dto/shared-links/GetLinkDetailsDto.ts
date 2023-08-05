import { IsString } from 'class-validator';

export class GetLinkDetailsDto {
  @IsString()
  _id?: string;
}
