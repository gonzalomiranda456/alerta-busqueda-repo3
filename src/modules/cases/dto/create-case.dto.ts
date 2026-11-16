import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateCaseDto {
  @IsString({ message: 'El nombre debe ser texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  first_name: string;

  @IsString({ message: 'El apellido debe ser texto' })
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  last_name: string;

  @IsInt({ message: 'La edad debe ser un número entero' })
  @IsPositive({ message: 'La edad debe ser mayor a 0' })
  age: number;

  @IsString({ message: 'La descripción debe ser texto' })
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  description: string;

  @IsBoolean({ message: 'El estado debe ser true o false' })
  @IsOptional()
  estado?: boolean;

  @IsInt()
  @IsPositive()
  location_id: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  user_id?: number;
}