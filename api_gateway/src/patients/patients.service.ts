import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import * as FormData from 'form-data';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientDto } from './dto/patient.dt';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  urlPatients = 'http://localhost:3000/api/patient';
  async findAll(): Promise<any> {
    const patients = await axios.get(this.urlPatients).then((response) => {
      return response.data;
    });
    return patients;
  }

  async findOne(id: number) {
    const patient = await axios
      .get(`${this.urlPatients}/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const result = await axios.put(
      `${this.urlPatients}/${id}`,
      updatePatientDto,
    );
    return result.data;
  }

  async remove(id: number) {
    const result = await axios.delete(`${this.urlPatients}/${id}`);
    return result.data;
  }

  async loadPatients(file: Express.Multer.File): Promise<PatientDto[]> {
    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);
    const result = await axios.post(
      `${this.urlPatients}/loadPatients`,
      formData,
    );
    return result.data;
  }

  async create(patient: CreatePatientDto) {
    if (!patient) throw new UnprocessableEntityException('Solicitud invalida');
    const newPatient = await axios
      .post(this.urlPatients, patient)
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
