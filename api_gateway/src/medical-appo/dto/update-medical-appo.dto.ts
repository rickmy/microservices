import { PartialType } from '@nestjs/swagger';
import { CreateMedicalAppoDto } from './create-medical-appo.dto';

export class UpdateMedicalAppoDto extends PartialType(CreateMedicalAppoDto) {}
