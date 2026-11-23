import {
  IsDefined,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateLocationDto {
  @IsDefined({ message: 'La provincia es obligatoria.' })
  @IsString({ message: 'La provincia debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La provincia no puede estar vacía.' })
  @MinLength(3, { message: 'La provincia debe tener al menos 3 caracteres.', })
  @MaxLength(100, { message: 'La provincia no puede superar los 100 caracteres.', })
  province: string;

  @IsDefined({ message: 'La ciudad o municipio es obligatorio.' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La ciudad no puede estar vacía.' })
  @MinLength(2, { message: 'La ciudad debe tener al menos 2 caracteres.', })
  @MaxLength(100, { message: 'La ciudad no puede superar los 100 caracteres.', })
  city: string;
}