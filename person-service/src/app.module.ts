import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { PrismaService } from './prisma/prisma.service';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  imports: [PatientModule, DoctorModule, SpecialtyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
