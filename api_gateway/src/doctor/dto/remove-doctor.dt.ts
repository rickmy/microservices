import { ApiProperty } from '@nestjs/swagger';

export class RemoveDoctorDto {
  @ApiProperty({ description: 'estado', example: true, type: Boolean })
  status: boolean;
  @ApiProperty({ description: 'mensaje', example: 'Doctor eliminado' })
  message: string;
}
