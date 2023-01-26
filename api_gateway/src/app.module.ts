import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalAppoModule } from './medical-appo/medical-appo.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [PatientsModule, MedicalAppoModule, AuthModule, DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
