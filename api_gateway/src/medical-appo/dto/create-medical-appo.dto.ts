import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateMedicalAppoDto {
  @ApiProperty({})
  attentionDate: Date;
  @IsDate({ message: 'El campo fecha de atencion debe ser Date' })
  @IsNotEmpty({ message: 'El campo fecha de atencion es requerido' })
  medicalObservations: string;
  @IsString({ message: 'El campo observacion medica debe ser un string' })
  @IsNotEmpty({ message: 'El campo observacion medica es requerido' })
  reasonForAppointment: string;
  @IsString({ message: 'El campo motivo de cita debe ser un string' })
  @IsNotEmpty({ message: 'El campo motivo de cita  es requerido' })
  serviceTime?: string;
  @IsString({ message: 'El campo tiempo de servicio debe ser un string' })
  @IsNotEmpty({ message: 'El campo tiempo de servicio es requerido' })

 condition: boolean;

}
