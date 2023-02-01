import { UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PatientSex } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService, PrismaService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('findOneById', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService, PrismaService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should return a patientDto object when given an id', async () => {
    const id = 1;
    const expectedResult = {
      id: 1,
      dni: '1726773623',
      completeName: 'Ricardo Yaguachi',
      email: 'ricky081297@hotmail.com',
      sex: PatientSex.Otro || null,
      oldYear: 20,
    };

    const result = await service.findOneById(id);

    expect(result).toEqual(expectedResult);
  });

  it('should throw an UnprocessableEntityException when given an invalid id', async () => {
    const id = -1;

    try {
      await service.findOneById(id);
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
    }
  });
});
