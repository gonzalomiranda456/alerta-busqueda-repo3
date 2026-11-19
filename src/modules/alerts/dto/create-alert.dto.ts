import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  description: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  case_id: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  user_id?: number;
}