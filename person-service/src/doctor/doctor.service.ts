import {
  ForbiddenException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { RemoveDto } from 'src/core/DTOS/remove.dto';
import { SpecialtyService } from 'src/specialty/specialty.service';
import { PrismaService } from './../prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ListDoctorDto } from './dto/list-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorEntity } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly specialtyService: SpecialtyService,
  ) {}
  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorEntity> {
    try {
      const doctorDb = await this.findOneByDni(createDoctorDto.dni);
      if (doctorDb) {
        throw new ForbiddenException('El doctor ya existe en la base de datos');
      }
      const specialtyDB = await this.specialtyService.findOne(
        createDoctorDto.specialtyId,
      );
      if (!specialtyDB) {
        throw new ForbiddenException(
          'La especialidad no existe en la base de datos',
        );
      }
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

  async findAll(): Promise<ListDoctorDto[]> {
    try {
      const doctorsDb = await this.prisma.doctor.findMany({
        where: {
          status: true,
        },
        include: {
          specialty: true,
        },
      });
      if (!doctorsDb) {
        return [];
      }
      const doctors: ListDoctorDto[] = doctorsDb.map((doctor) => {
        return {
          dni: doctor.dni,
          completeName: doctor.name + ' ' + doctor.lastName,
          email: doctor.email,
          codeSenecyt: doctor.codeSenecyt,
          specialty: doctor.specialty.specialty,
        };
      });
      return doctors;
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error.message);
    }
  }

  async findOneByDni(dni: string): Promise<DoctorEntity | null> {
    const doctorDb = await this.prisma.doctor.findUnique({
      where: {
        dni: dni,
      },
    });
    if (!doctorDb) {
      throw new ForbiddenException('El doctor no existe en la base de datos');
    }
    return doctorDb;
  }

  async findOne(id: number): Promise<DoctorEntity | null> {
    const doctorDb = await this.prisma.doctor.findUnique({
      where: {
        id: id,
      },
    });
    if (!doctorDb) {
      throw new ForbiddenException('El doctor no existe en la base de datos');
    }
    return doctorDb;
  }

  async update(
    id: number,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<DoctorEntity> {
    return await this.prisma.doctor
      .update({
        where: {
          id: id,
        },
        data: {
          ...updateDoctorDto,
        },
      })
      .catch((error) => {
        console.log(error);
        throw new UnprocessableEntityException(error.message);
      });
  }

  async remove(id: number): Promise<RemoveDto> {
    const doctorDb = await this.findOne(id);
    if (!doctorDb) {
      return {
        status: false,
        message: 'El doctor no existe en la base de datos',
      };
    }
    await this.prisma.doctor.update({
      where: {
        id: id,
      },
      data: {
        status: false,
      },
    });
    return {
      status: true,
      message: 'El doctor se elimino correctamente',
    };
  }
}
