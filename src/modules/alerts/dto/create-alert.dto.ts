import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  @IsNotEmpty({ message: 'La descripción del avistamiento es obligatoria' })
  description: string;

  @IsInt({ message: 'El ID del desaparecido debe ser un número entero' })
  @IsPositive()
  desaparecido_id: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  user_id?: number;
}