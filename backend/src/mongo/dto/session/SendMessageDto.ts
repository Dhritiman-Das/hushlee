import { IsString, IsNotEmpty, IsUrl, ValidateNested } from 'class-validator';

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  readonly sessionId: string;
  @IsString()
  @IsNotEmpty()
  readonly senderId: string;
  @IsString()
  readonly message: string;
}
