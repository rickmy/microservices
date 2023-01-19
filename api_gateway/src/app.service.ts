import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreatePatientDTO } from './models/patients/createPatient.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getPatients(): Promise<any> {
    const patients = await axios
      .get('http://localhost:3000/api/patient')
      .then((response) => {
        return response.data;
      });

    return patients;
  }

  async getMedicalAppointments() {
    const medicalAppointments = await axios
      .get('http://localhost:8080/api/medicalAppo/')
      .then((response) => {
        return response.data;
      });

    return medicalAppointments;
  }

  async postPatient(patient: CreatePatientDTO) {
    if (!patient) throw new UnprocessableEntityException('Solicitud invalida');
    const newPatient = await axios
      .post('http://localhost:3000/api/patient', patient)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });

    if (!newPatient) {
      throw new UnprocessableEntityException('No se pudo crear el paciente');
    }
    return newPatient;
  }
}
