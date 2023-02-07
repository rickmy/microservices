import {
  ForbiddenException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { RemoveDto } from 'src/core/DTOS/remove.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { SpecialtyEntity } from './entities/specialty.entity';

@Injectable()
export class SpecialtyService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<SpecialtyEntity> {
    try {
      const specialtyDB = await this.findOneBySpecialty(
        createSpecialtyDto.specialty,
      );
      if (specialtyDB) {
        throw new UnprocessableEntityException(
          `La ${createSpecialtyDto.specialty} ya existe.`,
        );
      }
      return await this.prisma.specialty.create({
        data: {
          ...createSpecialtyDto,
          father: 0,
          status: true,
          iconPath: '',
        },
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  findAll(): Promise<SpecialtyEntity[]> {
    return this.prisma.specialty.findMany();
  }

  async findOne(id: number): Promise<SpecialtyEntity> {
    const specialtyDB = await this.prisma.specialty.findUnique({
      where: {
        id: id,
      },
    });
    if (!specialtyDB) {
      throw new ForbiddenException('La especialidad no fue encontrada');
    }
    return specialtyDB;
  }

  async findOneBySpecialty(specialty: string): Promise<SpecialtyEntity> {
    const specialtyDB = await this.prisma.specialty.findFirst({
      where: {
        specialty: {
          equals: specialty,
        },
      },
    });
    if (!specialtyDB) {
      return null;
    }
    return specialtyDB;
  }

  async update(
    id: number,
    updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<UpdateSpecialtyDto> {
    try {
      return await this.prisma.specialty.update({
        where: {
          id: id,
        },
        data: {
          ...updateSpecialtyDto,
        },
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  async remove(id: number): Promise<RemoveDto> {
    const specialtyDB = await this.findOne(id);
    if (!specialtyDB) {
      return {
        status: false,
        message: 'Especialidad no encontrada',
      };
    }
    await this.prisma.specialty.update({
      where: {
        id: id,
      },
      data: {
        status: false,
      },
    });
    return {
      status: true,
      message: 'La especialidad se elimino correctamente',
    };
  }
}
