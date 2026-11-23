import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'El nombre completo es obligatorio.' })
  @IsString({ message: 'El nombre completo debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El nombre completo no puede estar vacío.' })
  @MinLength(3, {
    message: 'El nombre completo debe tener al menos 3 caracteres.',
  })
  @MaxLength(150, {
    message: 'El nombre completo no puede superar los 150 caracteres.',
  })
  full_name: string;

  @IsDefined({ message: 'El DNI es obligatorio.' })
  @IsNumberString(
    { no_symbols: true },
    { message: 'El DNI debe contener únicamente números.' },
  )
  @IsNotEmpty({ message: 'El DNI no puede estar vacío.' })
  @MinLength(7, { message: 'El DNI debe tener al menos 7 dígitos.' })
  @MaxLength(8, { message: 'El DNI no puede superar los 8 dígitos.' })
  dni: string;

  @IsDefined({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail({}, { message: 'El formato del correo electrónico no es válido.' })
  @IsNotEmpty({ message: 'El correo electrónico no puede estar vacío.' })
  @MaxLength(150, {
    message: 'El correo electrónico no puede superar los 150 caracteres.',
  })
  email: string;

  @IsDefined({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía.' })
  @MinLength(6, {
    message: 'La contraseña debe tener al menos 6 caracteres.',
  })
  @MaxLength(100, {
    message: 'La contraseña no puede superar los 100 caracteres.',
  })
  password: string;
}