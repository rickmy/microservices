import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreatePatientDto {
  @IsString({ message: 'El número de documento debe ser un string' })
  @IsNotEmpty({ message: 'El número de documento es requerido.' })
  @ApiProperty({ description: 'DNI', example: '1234567890' })
  dni: string;

  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es requerido.' })
  @ApiProperty({ description: 'Nombre', example: 'Juan' })
  firstName: string;

  @IsString({ message: 'El segundon nombre debe ser un string' })
  @IsNotEmpty({ message: 'El segundo nombre es requerido.' })
  @ApiProperty({ description: 'Nombre', example: 'Adrian' })
  middleName: string;

  @IsString({ message: 'El apellido paterno debe ser un string' })
  @IsNotEmpty({ message: 'El apellido paterno es requerido.' })
  @ApiProperty({ description: 'Apellido paterno', example: 'Perez' })
  firstSurname: string;

  @IsString({ message: 'El apellido materno debe ser un string' })
  @IsNotEmpty({ message: 'El apellido materno es requerido.' })
  @ApiProperty({ description: 'Apellido materno', example: 'Perez' })
  secondSurname: string;

  @IsEmail({}, { message: 'El email debe ser un email' })
  @IsNotEmpty({ message: 'El email es requerido.' })
  @ApiProperty({ description: 'Email', example: 'r@r.com' })
  email: string;
}
