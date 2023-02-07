import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpecialtyModule } from 'src/specialty/specialty.module';
@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService],
  imports: [SpecialtyModule],
})
export class DoctorModule {}
