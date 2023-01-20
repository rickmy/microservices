import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({ example: '12345678', description: 'DNI del paciente' })
  @IsNotEmpty({ message: 'El campo dni es requerido' })
  @IsString({ message: 'El campo dni debe ser un string' })
  dni: string;
  @IsNotEmpty({ message: 'El campo nombre es requerido' })
  @IsString({ message: 'El campo nombre debe ser un string' })
  firstName: string;
  @IsOptional({ message: 'El campo segundo nombre es opcional' })
  middleName?: string;
  @IsNotEmpty({ message: 'El campo apellido es requerido' })
  @IsString({ message: 'El campo apellido debe ser un string' })
  firstSurname: string;
  @IsOptional({ message: 'El campo segundo apellido es opcional' })
  @IsString({ message: 'El campo segundo apellido debe ser un string' })
  secondSurname?: string;
  @IsNotEmpty({ message: 'El campo email es requerido' })
  @IsEmail({}, { message: 'El campo email debe ser un email' })
  email: string;
}
