import { IsString, IsNotEmpty, IsUrl, ValidateNested } from 'class-validator';

export class FindLinkDto {
  @IsString()
  readonly _id?: string;
  @IsString()
  readonly owner?: string;
}
