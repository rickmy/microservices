import { MedicalAppoService } from './medical-appo.service';
import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';
export declare class MedicalAppoController {
    private readonly medicalAppoService;
    constructor(medicalAppoService: MedicalAppoService);
    create(createMedicalAppoDto: CreateMedicalAppoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<CreateMedicalAppoDto>;
    update(id: string, updateMedicalAppoDto: UpdateMedicalAppoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
