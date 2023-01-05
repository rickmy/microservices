import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger/dist';
import { CivilStatus, PatientSex } from '@prisma/client';
import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
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

  @IsEnum(PatientSex)
  @IsNotEmpty({ message: 'El sexo es requerido.' })
  @ApiProperty({ description: 'Sexo', example: PatientSex.Masculino })
  sex: PatientSex;

  @IsString({ message: 'La fecha de nacimiento debe ser un string' })
  @IsNotEmpty({ message: 'La fecha de nacimiento es requerida.' })
  @ApiProperty({ description: 'Fecha de nacimiento', example: '1990-01-01' })
  DateOfBirth: string;

  @IsEnum(CivilStatus, { message: 'El estado civil debe ser un string' })
  @IsNotEmpty({ message: 'El estado civil es requerido.' })
  @ApiProperty({ description: 'Estado civil', example: CivilStatus.Soltero_a })
  civilStatus: CivilStatus;

  @IsString({ message: 'La direccion debe ser un string' })
  @IsNotEmpty({ message: 'La direccion es requerida.' })
  @ApiProperty({ description: 'Direccion', example: 'Calle 1' })
  address: string;

  @IsString({ message: 'El telefono debe ser un string' })
  @IsNotEmpty({ message: 'El telefono es requerido.' })
  @ApiProperty({ description: 'Telefono', example: '0987654321' })
  phone: string;

  @IsNumber({}, { message: 'El id de la discapacidad debe ser un numero' })
  @IsEmpty({ message: 'El id de la discapacidad puede o no ser enviado.' })
  @IsOptional()
  @ApiProperty({
    description: 'Id de la discapacidad',
    example: null,
  })
  disabilityId: number;

  @IsNumber(
    {},
    { message: 'El porcentaje de la discapacidad debe ser un numero' },
  )
  @IsEmpty({
    message: 'El porcentaje de la discapacidad puede o no ser enviado.',
  })
  @IsOptional()
  @ApiProperty({
    description: 'porcentaje de discapacidad',
    example: null,
    required: false,
  })
  percentage: number;
}
