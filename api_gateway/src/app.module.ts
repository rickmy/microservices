import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalAppoModule } from './medical-appo/medical-appo.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { TreatmentModule } from './treatment/treatment.module';
import { SymptomModule } from './symptom/symptom.module';
import { DiagnosticModule } from './diagnostic/diagnostic.module';
import { ReportsModule } from './reports/reports.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { AuthorityModule } from './authority/authority.module';

@Module({
  imports: [
    PatientsModule,
    MedicalAppoModule,
    AuthModule,
    DoctorModule,
    TreatmentModule,
    SymptomModule,
    DiagnosticModule,
    ReportsModule,
    SpecialtyModule,
    UsersModule,
    RoleModule,
    AuthorityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
