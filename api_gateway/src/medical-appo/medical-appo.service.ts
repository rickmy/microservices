import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';
import axios from 'axios';

@Injectable()
export class MedicalAppoService {
  async findAll() {
    const informacion = await axios
      .get('http://localhost:8080/api/medicalAppo/')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('Un error existe aqui');
      });
    return informacion;
  }
  async findOne(id: number): Promise<CreateMedicalAppoDto>{
    return await axios
      .get('http://localhost:8080/api/medicalAppo/' + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('Existe un error aqui');
      });
  }
  update(id: number, updateMedicalAppoDto: UpdateMedicalAppoDto) {
    return `This action updates a #${id} medicalAppo`;
  }
  remove(id: number) {
    return `This action removes a #${id} medicalAppo`;
  }

  getHello(): string {
    return 'Bienvenidos';
  }
  async create(medicalAppo: CreateMedicalAppoDto) {
    if (!medicalAppo)
      throw new UnprocessableEntityException('Solicitud denegada');
    const newDatos = await axios
      .post('http://localhost:8080/api/medicalAppo', medicalAppo)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });

    return newDatos;
  }
}
