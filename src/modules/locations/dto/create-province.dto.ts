import {
  IsDefined,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProvinceDto {
  @IsDefined({ message: 'El nombre de la provincia es obligatorio.' })
  @IsString({ message: 'El nombre de la provincia debe ser texto.' })
  @IsNotEmpty({ message: 'El nombre de la provincia no puede estar vacío.' })
  @MinLength(3, {
    message: 'El nombre de la provincia debe tener al menos 3 caracteres.',
  })
  @MaxLength(100, {
    message: 'El nombre de la provincia no puede superar los 100 caracteres.',
  })
  name: string;
}