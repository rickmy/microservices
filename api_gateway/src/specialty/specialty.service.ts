import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Injectable()
export class SpecialtyService {
  urlSpecialty = 'http://localhost:3000/api/specialty';
  async create(doctor: CreateSpecialtyDto) {
    if (!doctor) throw new UnprocessableEntityException('Solicitud invalida');
    const newDoctor = await axios
      .post(this.urlSpecialty, doctor)
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
    const doctors = await axios.get(this.urlSpecialty).then((response) => {
      return response.data;
    });
    return doctors;
  }

  async findOne(id: number) {
    const response = await axios.get(`${this.urlSpecialty}/${id}`);
    return response.data;
  }

  async update(id: number, updateSpecialtyrDto: UpdateSpecialtyDto) {
    const response = await axios.put(
      `${this.urlSpecialty}/${id}`,
      updateSpecialtyrDto,
    );
    return response.data;
  }

  async remove(id: number) {
    const response = await axios.delete(`${this.urlSpecialty}/${id}`);
    return response.data;
  }
}
