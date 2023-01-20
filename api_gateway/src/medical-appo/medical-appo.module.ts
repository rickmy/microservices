import { Module } from '@nestjs/common';
import { MedicalAppoService } from './medical-appo.service';
import { MedicalAppoController } from './medical-appo.controller';

@Module({
  controllers: [MedicalAppoController],
  providers: [MedicalAppoService]
})
export class MedicalAppoModule {}
