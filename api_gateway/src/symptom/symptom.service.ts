import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';

@Injectable()
export class SymptomService {
  urlSymptoms = 'http://localhost:8000/api/symptom';
  async findAll(): Promise<any> {
    const symptoms = await axios.get(this.urlSymptoms).then((response) => {
      return response.data;
    });
    return symptoms;
  }

  findOne(id: number) {
    const symptom = axios
      .get(`${this.urlSymptoms}/${id}`)
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
    return `This action updates a #${id} symptom`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptom`;
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
