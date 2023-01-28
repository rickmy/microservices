import { Test, TestingModule } from '@nestjs/testing';
import { MedicalAppoService } from './medical-appo.service';

describe('MedicalAppoService', () => {
  let service: MedicalAppoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalAppoService],
    }).compile();

    service = module.get<MedicalAppoService>(MedicalAppoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
