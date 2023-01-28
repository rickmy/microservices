import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';

export class CreateTreatmentDto {
  @IsNotEmpty({ message: 'El campo nombre es requerido' })
  @IsString({ message: 'El campo nombre debe ser un string' })
  name: string;

  @IsNotEmpty({ message: 'El campo descripcion es requerido' })
  @IsString({ message: 'El campo descripcion debe ser un string' })
  description: string;

  @IsNotEmpty({ message: 'El campo estado es requerido' })
  @IsBoolean({ message: 'El campo estado debe ser un string' })
  status: boolean;
}
