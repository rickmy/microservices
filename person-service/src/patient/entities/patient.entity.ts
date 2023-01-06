import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  CivilStatus,
  Patient,
  PatientSex,
  PatientStatus,
} from '@prisma/client';

export class PatientEntity implements Patient {
  @ApiProperty({ example: 1, description: 'Patient id', readOnly: true })
  id: number;
  @ApiProperty({ example: '123456789', description: 'Patient DNI' })
  dni: string;
  @ApiProperty({ example: 'Juan', description: 'Patient first name' })
  firstName: string;
  @ApiProperty({
    example: 'Adrian',
    description: 'Patient first surname',
    required: false,
    nullable: true,
  })
  middleName: string;
  @ApiProperty({ example: 'Perez', description: 'Patient second surname' })
  firstSurname: string;
  @ApiProperty({ example: 'Perez', description: 'Patient second surname' })
  secondSurname: string;
  @ApiProperty({ example: PatientSex.Masculino, description: 'Masculino' })
  sex: PatientSex;
  @ApiProperty({ example: '1990-01-01', description: 'Patient date of birth' })
  DateOfBirth: string;
  @ApiProperty({ example: CivilStatus.Soltero_a, description: 'Soltero' })
  civilStatus: CivilStatus;
  @ApiProperty({
    example: 'r@r.com',
    description: 'Patient email',
    required: true,
  })
  email: string;
  @ApiProperty({ example: 'Calle 1', description: 'Patient address' })
  address: string;
  @ApiProperty({ example: '0987654321', description: 'Patient phone' })
  phone: string;
  @ApiProperty({ example: 1, description: 'Patient disability' })
  disabilityId: number;
  @ApiProperty({ example: 0, description: 'Patient disability percentage' })
  percentage: number;
  @ApiProperty({ example: PatientStatus.R, description: 'Patient status' })
  status: PatientStatus;
}
