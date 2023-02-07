import { ApiProperty } from '@nestjs/swagger';
import { Specialty } from '@prisma/client';

export class SpecialtyEntity implements Specialty {
  @ApiProperty({ example: 1, description: 'Specialty id', readOnly: true })
  id: number;
  @ApiProperty({
    example: 'Especialidad',
    description: 'nombre de la especialidad',
    type: String,
  })
  specialty: string;
  @ApiProperty({
    example: 1,
    description: 'id de la especialidad padre',
    type: Number,
    required: false,
    default: null,
  })
  father: number;
  @ApiProperty({
    example: 'outline/symbols/health_alt',
    description: 'icono de la especialidad',
    required: false,
    default: 'outline/symbols/health_alt',
    type: String,
  })
  iconPath: string;
  @ApiProperty({
    example: true,
    description: 'estado de la especialidad',
    required: false,
    default: true,
    type: Boolean,
  })
  status: boolean;
}
