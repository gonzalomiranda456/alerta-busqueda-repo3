import {
  IsBoolean,
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCaseDto {
  @IsDefined({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  first_name: string;

  @IsDefined({ message: 'El apellido es obligatorio.' })
  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El apellido no puede estar vacío.' })
  @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres.' })
  @MaxLength(100, {
    message: 'El apellido no puede superar los 100 caracteres.',
  })
  last_name: string;

  @IsDefined({ message: 'La fecha de nacimiento es obligatoria.' })
  @IsDateString(
    {},
    {
      message:
        'La fecha de nacimiento debe tener un formato válido (YYYY-MM-DD).',
    },
  )
  @IsNotEmpty({ message: 'La fecha de nacimiento no puede estar vacía.' })
  birth_date: string;

  @IsDefined({ message: 'La descripción es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  @MinLength(10, {
    message: 'La descripción debe tener al menos 10 caracteres.',
  })
  @MaxLength(2000, {
    message: 'La descripción no puede superar los 2000 caracteres.',
  })
  description: string;

  @IsOptional()
  @IsBoolean({ message: 'El estado debe ser verdadero (true) o falso (false).' })
  estado?: boolean;

  @IsDefined({
    message: 'El ID del municipio (municipality_id) es obligatorio.',
  })
  @IsInt({ message: 'El ID del municipio debe ser un número entero.' })
  @IsPositive({ message: 'El ID del municipio debe ser un número positivo.' })
  @IsNotEmpty({ message: 'El ID del municipio no puede estar vacío.' })
  municipality_id: number;

  @IsOptional()
  @IsInt({ message: 'El ID del usuario debe ser un número entero.' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo.' })
  user_id?: number;
}