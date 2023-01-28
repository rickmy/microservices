import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalAppoModule } from './medical-appo/medical-appo.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { SymptomsModule } from './catalogues/symptoms/symptoms.module';
import { TreatmentModule } from './treatment/treatment.module';
import { SymptomModule } from './symptom/symptom.module';
import { DiagnosticModule } from './diagnostic/diagnostic.module';

@Module({
  imports: [PatientsModule, MedicalAppoModule, AuthModule, DoctorModule,SymptomsModule, TreatmentModule, SymptomModule, DiagnosticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
