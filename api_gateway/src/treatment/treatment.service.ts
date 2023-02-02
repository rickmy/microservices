import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Injectable()
export class TreatmentService {
  urlTreatments = 'http://127.0.0.1:8000/api/treatment/';

  async findAll(): Promise<any> {
    const treatments = await axios.get(this.urlTreatments).then((response) => {
      return response.data;
    });
    return treatments;
  }

  findOne(id: number) {
    const treatment = axios
    .get(`${this.urlTreatments}${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return treatment;
  }

  update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    const treatment = axios
    .patch(`${this.urlTreatments}${id}/`, updateTreatmentDto)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return treatment;
  }

  remove(id: number) {
    const treatment = axios
    .delete(`${this.urlTreatments}${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return treatment;
  }

  async create(treatment: CreateTreatmentDto) {
    if (!treatment)
      throw new UnprocessableEntityException('Solicitud invalida');
    const newtreatment = await axios
      .post(this.urlTreatments, treatment)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return newtreatment;
  }
}
