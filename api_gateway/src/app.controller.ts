import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePatientDTO } from './models/patients/createPatient.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('patients')
  getPatients() {
    return this.appService.getPatients();
  }

  @Get('medicalAppointments')
  getMedicalAppointments() {
    return this.appService.getMedicalAppointments();
  }

  @Post('patient')
  postPatient(@Body() patient: CreatePatientDTO) {
    return this.appService.postPatient(patient);
  }
}
