import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDoctorDto {
  @IsString({ message: 'El DNI debe ser un string' })
  @ApiProperty({ description: 'DNI', example: '1234567890' })
  dni: string;
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es requerido.' })
  @ApiProperty({ description: 'Nombre', example: 'Juan' })
  name: string;
  @IsString({ message: 'El apellido debe ser un string' })
  @IsNotEmpty({ message: 'El apellido es requerido.' })
  @ApiProperty({ description: 'Apellido', example: 'Perez' })
  lastName: string;
  @IsEmail({}, { message: 'El email debe ser un email' })
  @IsNotEmpty({ message: 'El email es requerido.' })
  @ApiProperty({ description: 'Email', example: 'example@yavirac.edu.ec' })
  email: string;
  @IsNumber({}, { message: 'El codigo de la senecyt debe ser un number' })
  @IsNotEmpty({ message: 'La dirección es requerida.' })
  @ApiProperty({
    description: 'Codigo de la senecyt',
    example: 2323,
    type: Number,
  })
  codeSenecyt: number;
  @IsNumber({}, { message: 'La especialidad debe ser un número' })
  @Min(1, { message: 'La especialidad debe ser mayor a 0' })
  @IsNotEmpty({ message: 'La especialidad es requerida.' })
  @ApiProperty({ description: 'Especialidad', example: '1' })
  specialtyId: number;
}
