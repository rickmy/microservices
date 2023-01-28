import { CreateMedicalAppoDto } from './create-medical-appo.dto';
declare const UpdateMedicalAppoDto_base: import("@nestjs/common").Type<Partial<CreateMedicalAppoDto>>;
export declare class UpdateMedicalAppoDto extends UpdateMedicalAppoDto_base {
    attentionDate: string;
    medicalObservations: string;
    reasonForAppointment: string;
    serviceTime?: string;
}
export {};
