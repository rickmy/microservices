import { ApiProperty } from '@nestjs/swagger';

export class ListDoctorDto {
  @ApiProperty({ description: 'Id del doctor', example: 1, type: Number })
  id: number;
  @ApiProperty({ description: 'DNI', example: '1234567890' })
  dni: string;
  @ApiProperty({
    description: 'Nombre completo del doctor',
    example: 'Juan Perez',
  })
  completeName: string;
  @ApiProperty({ description: 'Email', example: 'example@yavirac.edu.ec' })
  email: string;
  @ApiProperty({
    description: 'Codigo de la senecyt',
    example: 2323,
    type: Number,
  })
  codeSenecyt: number;
  @ApiProperty({ description: 'Especialidad', example: 'Psicología' })
  specialty: string;
}
