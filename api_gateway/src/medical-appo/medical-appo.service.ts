import { Injectable } from '@nestjs/common';
import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';

@Injectable()
export class MedicalAppoService {
  create(createMedicalAppoDto: CreateMedicalAppoDto) {
    return 'This action adds a new medicalAppo';
  }

  findAll() {
    return `This action returns all medicalAppo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalAppo`;
  }

  update(id: number, updateMedicalAppoDto: UpdateMedicalAppoDto) {
    return `This action updates a #${id} medicalAppo`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalAppo`;
  }
}
