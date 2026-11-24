import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMunicipalityDto {
  @IsDefined({ message: 'El nombre del municipio es obligatorio.' })
  @IsString({ message: 'El nombre del municipio debe ser texto.' })
  @IsNotEmpty({ message: 'El nombre del municipio no puede estar vacío.' })
  @MinLength(2, {
    message: 'El nombre del municipio debe tener al menos 2 caracteres.',
  })
  @MaxLength(100, {
    message: 'El nombre del municipio no puede superar los 100 caracteres.',
  })
  name: string;

  @IsDefined({ message: 'El ID de la provincia (province_id) es obligatorio.' })
  @IsInt({ message: 'El ID de la provincia debe ser un número entero.' })
  @IsPositive({ message: 'El ID de la provincia debe ser un número positivo.' })
  @IsNotEmpty({ message: 'El ID de la provincia no puede estar vacío.' })
  province_id: number;
}