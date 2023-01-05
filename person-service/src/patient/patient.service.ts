import { Injectable } from '@nestjs/common';
import { UnprocessableEntityException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientEntity } from './entities/patient.entity';
import * as xlsx from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx';
import { PatientStatus } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}
  async create(createPatientDto: CreatePatientDto): Promise<PatientEntity> {
    const dniExist = await this.findOneByDni(createPatientDto.dni);
    if (dniExist)
      throw new UnprocessableEntityException('El paciente ya existe');

    const emailExist = await this.findOneByEmail(createPatientDto.email);
    if (emailExist)
      throw new UnprocessableEntityException('El email ya existe');

    const patient = await this.prisma.patient.create({
      data: {
        ...createPatientDto,
      },
    });
    return patient;
  }

  async loadPatients(file: Express.Multer.File): Promise<PatientEntity[]> {
    const patients: CreatePatientDto[] = [];
    const patientsCreated = [];

    if (!file)
      throw new UnprocessableEntityException('No se ha cargado el archivo');

    const workBook: WorkBook = xlsx.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
      cellNF: false,
    });
    const sheet: WorkSheet = workBook.Sheets[workBook.SheetNames[0]];
    const range = xlsx.utils.decode_range(sheet['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      if (R === 0 || !sheet[xlsx.utils.encode_cell({ c: 0, r: R })]) {
        continue;
      }
      let col = 0;

      const newPatient: CreatePatientDto = {
        dni: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v.toString(),
        firstName: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v,
        middleName: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v,
        firstSurname: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v,
        secondSurname: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v,
        email: sheet[xlsx.utils.encode_cell({ c: col++, r: R })]?.v,
      };

      patients.push(newPatient);
      const dniExist = await this.findOneByDni(newPatient.dni);
      if (dniExist) continue;

      const emailExist = await this.findOneByEmail(newPatient.email);
      if (emailExist) continue;
      const patientCreated = await this.prisma.patient.create({
        data: {
          ...newPatient,
        },
      });
      patientsCreated.push(patientCreated);
    }
    return patientsCreated;
  }

  async findOneByDni(dni: string): Promise<PatientEntity | null> {
    return await this.prisma.patient.findUnique({
      where: {
        dni: dni,
      },
    });
  }

  async findOneByEmail(email: string): Promise<PatientEntity | null> {
    return await this.prisma.patient.findUnique({
      where: {
        email,
      },
    });
  }

  async findOneById(id: number): Promise<PatientEntity | null> {
    return await this.prisma.patient
      .findUnique({
        where: {
          id,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException(
          `No se ha podido encontrar el paciente con id ${id}`,
        );
      });
  }

  async findAll(): Promise<PatientEntity[]> {
    return await this.prisma.patient.findMany();
  }

  update(
    id: number,
    updatePatientDto: UpdatePatientDto,
  ): Promise<PatientEntity> {
    return this.prisma.patient
      .update({
        where: {
          id,
        },
        data: {
          ...updatePatientDto,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException(
          `No se ha podido actualizar el paciente con id ${id}`,
        );
      });
  }

  async remove(id: number): Promise<string> {
    await this.prisma.patient
      .update({
        where: {
          id,
        },
        data: {
          status: PatientStatus.D,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new UnprocessableEntityException(
          `No se ha podido eliminar el paciente con id ${id}`,
        );
      });
    return 'El paciente ha sido eliminado';
  }
}
