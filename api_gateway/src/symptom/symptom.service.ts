import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';

@Injectable()
export class SymptomService {
  urlSymptoms = 'http://127.0.0.1:8000/api/symptom/';
  async findAll(): Promise<any> {
    const symptoms = await axios.get(this.urlSymptoms).then((response) => {
      console.log(response);
      return response.data;

    }).catch((error) => {
      console.log(error);
      throw new UnprocessableEntityException(error.response.data.message);
    });
    return symptoms;
  }

  findOne(id: number) {
    const symptom = axios
      .get(`${this.urlSymptoms}${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return symptom;
  }

  update(id: number, updateSymptomDto: UpdateSymptomDto) {
    const symptom = axios
    .patch(`${this.urlSymptoms}${id}/`, updateSymptomDto)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new UnprocessableEntityException(error.response.data.message);
    });
    return symptom;
  }

  remove(id: number) {
    const symptom = axios
    .delete(`${this.urlSymptoms}${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new UnprocessableEntityException(error.response.data.message);
    });
    return symptom;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async create(symptom: CreateSymptomDto) {
    if (!symptom) throw new UnprocessableEntityException('Solicitud invalida');
    const newsymptom = await axios
      .post(this.urlSymptoms, symptom)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
        
      });
    return newsymptom;
  }
}
