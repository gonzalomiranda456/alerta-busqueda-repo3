import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAlertDto {
  @IsDefined({ message: 'La descripción de la alerta es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  @MinLength(10, { message: 'La descripción debe tener al menos 10 caracteres.', })
  @MaxLength(2000, { message: 'La descripción no puede superar los 2000 caracteres.', })
  description: string;

  @IsDefined({ message: 'El ID del caso (case_id) es obligatorio.' })
  @IsInt({ message: 'El ID del caso debe ser un número entero.' })
  @IsPositive({ message: 'El ID del caso debe ser un número positivo.' })
  @IsNotEmpty({ message: 'El ID del caso no puede estar vacío.' })
  case_id: number;

  @IsOptional()
  @IsInt({ message: 'El ID del usuario debe ser un número entero.' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo.' })
  user_id?: number;
}