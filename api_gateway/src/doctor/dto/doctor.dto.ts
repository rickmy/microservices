import { ApiProperty } from '@nestjs/swagger';

export class DoctorDto {
  @ApiProperty({ example: 1, description: 'id del doctor', readOnly: true })
  id: number;
  @ApiProperty({ example: '123456789', description: 'dni del doctos' })
  dni: string;
  @ApiProperty({ example: 'Juan', description: 'nombre del doctor' })
  name: string;
  @ApiProperty({ example: 'Perez', description: 'apellido del doctor' })
  lastName: string;
  @ApiProperty({
    example: 'example@yavirac.edu.ec',
    description: 'email del doctor',
  })
  email: string;
  @ApiProperty({ example: 'Av 123 y calle 4', description: 'Direccion' })
  address: string;
  @ApiProperty({ example: '12344', description: 'Codigo de la senecyt' })
  codeSenecyt: number;
  @ApiProperty({ example: 1, description: 'Id de la especilidad' })
  specialtyId: number;
  @ApiProperty({ example: true, description: 'Estado del doctor' })
  status: boolean;
}
