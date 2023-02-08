import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, AuthService],
})
export class DoctorModule {}
