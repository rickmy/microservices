import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDoctorDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ description: 'Nombre', example: 'Juan' })
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ description: 'Apellido', example: 'Perez' })
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ description: 'Dirección', example: 'Mariscal Sucre' })
  address?: string;
}
