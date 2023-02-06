import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import axios from 'axios';
import { constants } from 'buffer';
import { throwError } from 'rxjs/internal/observable/throwError';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportsService {
  URL = 'http://localhost:8083/api/report/medicalAppo/';

  findOne(id: number) {
    const document = axios
      .get(this.URL + id + '/')
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return document;
  }
}
