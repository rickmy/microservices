import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';
import axios from 'axios';

@Injectable()
export class MedicalAppoService {
  urlMedicalAppo = 'http://localhost:8080/api/medicalAppo/';
  async findAll() {
    const informacion = await axios
      .get(this.urlMedicalAppo)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('Error');
      });
    return informacion;
  }
  async findOne(id: number): Promise<CreateMedicalAppoDto> {
    return await axios
      .get(this.urlMedicalAppo + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('Existe un error aqui');
      });
  }
  async update(id: number, updateMedicalAppoDto: UpdateMedicalAppoDto) {
    const actualizar = await axios
      .put(this.urlMedicalAppo, { ...updateMedicalAppoDto, id })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('No se puede actualizar');
      });
    return actualizar;
  }
  async remove(id: number) {
    return await axios
      .delete(this.urlMedicalAppo + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException('Eliminado con exito');
      });
  }

  getHello(): string {
    return 'Bienvenidos';
  }
  async create(medicalAppo: CreateMedicalAppoDto) {
    if (!medicalAppo)
      throw new UnprocessableEntityException('Solicitud denegada');
    const newDatos = await axios
      .post(this.urlMedicalAppo, medicalAppo)
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
