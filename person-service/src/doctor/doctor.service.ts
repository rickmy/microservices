import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorEntity } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorEntity> {
    try {
      const doctorDb = await this.findOneByDni(createDoctorDto.dni);
      console.log(doctorDb, '------------------');
      if (doctorDb) {
        throw new UnprocessableEntityException(
          'El doctor ya existe en la base de datos',
        );
      }
      //TODO: Validar que la especilidad SI exista en la base de datos
      return await this.prisma.doctor.create({
        data: {
          ...createDoctorDto,
        },
      });
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error.message);
    }
  }

  async findAll(): Promise<DoctorEntity[]> {
    try {
      return await this.prisma.doctor.findMany({
        where: {
          status: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error.message);
    }
  }

  async findOneByDni(dni: string): Promise<DoctorEntity | null> {
    return await this.prisma.doctor.findUnique({
      where: {
        dni: dni,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
