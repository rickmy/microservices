import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';

@Injectable()
export class DiagnosticService {
  urlDiagnostics = 'http://127.0.0.1:8000/api/diagnostic/';
  async findAll(): Promise<any> {
    const diagnostics = await axios
      .get(this.urlDiagnostics)
      .then((response) => {
        return response.data;
      });
    return diagnostics;
  }

  findOne(id: number) {
    const diagnostic = axios
    .get(`${this.urlDiagnostics}${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new UnprocessableEntityException(error.response.data.message);
    });
   return diagnostic;
  }
  

  

  update(id: number, updateDiagnosticDto: UpdateDiagnosticDto) {
    const diagnostic = axios
    .patch(`${this.urlDiagnostics}${id}/`, updateDiagnosticDto)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new UnprocessableEntityException(error.response.data.message);
    });
    return diagnostic;
  }

  remove(id: number) {
    const diagnostic = axios
    .delete(`${this.urlDiagnostics}${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new UnprocessableEntityException(error.response.data.message);
    });
    return diagnostic;
  }

  async create(diagnostic: CreateDiagnosticDto) {
    
    const newdiagnostic = await axios
      .post(this.urlDiagnostics, diagnostic)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return newdiagnostic;
  }
}
