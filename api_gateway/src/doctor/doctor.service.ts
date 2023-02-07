import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
  urlDoctors = 'http://localhost:3000/api/doctor';

  async create(doctor: CreateDoctorDto) {
    if (!doctor) throw new UnprocessableEntityException('Solicitud invalida');
    const newDoctor = await axios
      .post(this.urlDoctors, doctor)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return newDoctor;
  }

  async findAll(): Promise<any> {
    const doctors = await axios.get(this.urlDoctors).then((response) => {
      return response.data;
    });
    return doctors;
  }

  async findOne(id: number) {
    const response = await axios.get(`${this.urlDoctors}/${id}`);
    return response.data;
  }
  async findOneByDni(dni: string) {
    const response = await axios.get(`${this.urlDoctors}/dni/${dni}`);
    return response.data;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const response = await axios.put(
      `${this.urlDoctors}/${id}`,
      updateDoctorDto,
    );
    return response.data;
  }

  async remove(id: number) {
    const response = await axios.delete(`${this.urlDoctors}/${id}`);
    return response.data;
  }
}
