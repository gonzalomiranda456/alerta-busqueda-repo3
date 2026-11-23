import {
  IsBoolean,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
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

  @IsDefined({ message: 'La edad es obligatoria.' })
  @IsInt({ message: 'La edad debe ser un número entero.' })
  @Min(0, { message: 'La edad no puede ser menor a 0.' })
  @Max(120, { message: 'La edad no puede superar los 120 años.' })
  age: number;

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

  @IsDefined({ message: 'El ID de la ubicación (location_id) es obligatorio.' })
  @IsInt({ message: 'El ID de la ubicación debe ser un número entero.' })
  @IsPositive({ message: 'El ID de la ubicación debe ser un número positivo.' })
  @IsNotEmpty({ message: 'El ID de la ubicación no puede estar vacío.' })
  location_id: number;

  @IsOptional()
  @IsInt({ message: 'El ID del usuario debe ser un número entero.' })
  @IsPositive({ message: 'El ID del usuario debe ser un número positivo.' })
  user_id?: number;
}