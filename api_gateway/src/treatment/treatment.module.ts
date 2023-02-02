import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [TreatmentController],
  providers: [TreatmentService, AuthService],
})
export class TreatmentModule {}
