import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  async findAll(): Promise<any> {
    const patients = await axios
      .get('http://localhost:3000/api/patient')
      .then((response) => {
        return response.data;
      });

    return patients;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async create(patient: CreatePatientDto) {
    if (!patient) throw new UnprocessableEntityException('Solicitud invalida');
    const newPatient = await axios
      .post('http://localhost:3000/api/patient', patient)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return newPatient;
  }
}
