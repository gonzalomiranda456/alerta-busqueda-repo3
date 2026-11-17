import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString({ message: 'La provincia debe ser texto' })
  @IsNotEmpty({ message: 'La provincia es obligatoria' })
  province: string;

  @IsString({ message: 'La ciudad o municipio debe ser texto' })
  @IsNotEmpty({ message: 'La ciudad es obligatoria' })
  city: string;
}