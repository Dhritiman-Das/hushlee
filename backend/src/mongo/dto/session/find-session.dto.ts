import { IsString, IsNotEmpty, IsUrl, ValidateNested } from 'class-validator';

export class FindSessionDto {
  @IsString()
  readonly _id?: string;
  @IsString()
  readonly owner?: string;
  @IsString()
  readonly visitor?: string;
}
