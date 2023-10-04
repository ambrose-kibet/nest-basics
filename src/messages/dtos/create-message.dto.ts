import { IsString, Length } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @Length(1, 50)
  content: string;
}
