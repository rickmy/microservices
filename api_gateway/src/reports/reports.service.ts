import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';
import { writeFile, writeFileSync } from 'fs';
@Injectable()
export class ReportsService {
  URL = 'http://localhost:8083/api/report/medicalAppo/';

  findOne(id: number) {
    const document = axios
      .get(this.URL + id + '/')
      .then(async (response) => {
        console.log(response);
        const data = response.data;
        return data;
      })
      .catch((error) => {
        console.log(error);
        throw new UnprocessableEntityException(error.response.data.message);
      });
    return document;
  }
}
