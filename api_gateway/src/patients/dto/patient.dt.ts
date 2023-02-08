import { ApiProperty } from '@nestjs/swagger';
import { PatientSex } from 'src/core/enums/patient.enum';

export class PatientDto {
  @ApiProperty({ description: 'Id', example: 1 })
  id: number;
  @ApiProperty({ description: 'DNI', example: '1234567890' })
  dni: string;

  @ApiProperty({ description: 'Nombre Completo', example: 'Juan Perez' })
  completeName: string;

  @ApiProperty({ description: 'Email', example: 'r@r.com' })
  email: string;

  @ApiProperty({
    description: 'Sexo',
    example: PatientSex.Masculino,
    type: 'enum',
    enum: PatientSex,
    required: false,
  })
  sex: string;

  @ApiProperty({ description: 'Edad', example: 20 })
  oldYear: number;
}