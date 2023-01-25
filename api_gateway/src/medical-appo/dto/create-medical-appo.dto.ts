import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateMedicalAppoDto {
  @IsNotEmpty({ message: 'El campo fecha de atencion es requerido' })
  @IsString({ message: 'El campo fecha de atencion debe ser Date' })
  attentionDate: string;

  @IsNotEmpty({ message: 'El campo observacion medica es requerido' })
  @IsString({ message: 'El campo observacion medica debe ser un string' })
  medicalObservations: string;

  @IsString({ message: 'El campo motivo de cita debe ser un string' })
  @IsNotEmpty({ message: 'El campo motivo de cita  es requerido' })
  reasonForAppointment: string;

  @IsString({ message: 'El campo tiempo de servicio debe ser un string' })
  @IsNotEmpty({ message: 'El campo tiempo de servicio es requerido' })
  serviceTime?: string;
}
