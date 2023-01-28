import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';
export declare class MedicalAppoService {
    urlMedicalAppo: string;
    findAll(): Promise<any>;
    findOne(id: number): Promise<CreateMedicalAppoDto>;
    update(id: number, updateMedicalAppoDto: UpdateMedicalAppoDto): Promise<any>;
    remove(id: number): Promise<any>;
    getHello(): string;
    create(medicalAppo: CreateMedicalAppoDto): Promise<any>;
}
