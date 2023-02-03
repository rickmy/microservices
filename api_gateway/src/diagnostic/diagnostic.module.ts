import { Module } from '@nestjs/common';
import { DiagnosticService } from './diagnostic.service';
import { DiagnosticController } from './diagnostic.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [DiagnosticController],
  providers: [DiagnosticService, AuthService],
})
export class DiagnosticModule {}
