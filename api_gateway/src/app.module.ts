import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalAppoModule } from './medical-appo/medical-appo.module';

@Module({
  imports: [PatientsModule, MedicalAppoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
