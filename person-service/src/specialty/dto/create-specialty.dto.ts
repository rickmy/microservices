import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpecialtyDto {
  @ApiProperty({
    example: 'Cardiología',
    description: 'nombre de la especialidad',
  })
  @IsString({ message: 'El nombre de la especialidad debe ser un string' })
  @IsNotEmpty({ message: 'El nombre de la especialidad no puede estar vacio' })
  specialty: string;
}
