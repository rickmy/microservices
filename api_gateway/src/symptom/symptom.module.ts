import { Module } from '@nestjs/common';
import { SymptomService } from './symptom.service';
import { SymptomController } from './symptom.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [SymptomController],
  providers: [SymptomService, AuthService],
})
export class SymptomModule {}
