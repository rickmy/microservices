import { Test, TestingModule } from '@nestjs/testing';
import { MedicalAppoController } from './medical-appo.controller';
import { MedicalAppoService } from './medical-appo.service';

describe('MedicalAppoController', () => {
  let controller: MedicalAppoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalAppoController],
      providers: [MedicalAppoService],
    }).compile();

    controller = module.get<MedicalAppoController>(MedicalAppoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
