import { Doctor } from '@prisma/client';

export class DoctorEntity implements Doctor {
  id: number;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  codeSenecyt: number;
  specialtyId: number;
  status: boolean;

  constructor(partial: Partial<DoctorEntity>) {
    Object.assign(this, partial);
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}
