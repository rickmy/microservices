import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientsService {
    urlPatients: string;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePatientDto: UpdatePatientDto): string;
    remove(id: number): string;
    getHello(): string;
    create(patient: CreatePatientDto): Promise<any>;
}
