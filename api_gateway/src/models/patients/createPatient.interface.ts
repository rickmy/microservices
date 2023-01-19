export interface CreatePatientDTO {
  dni: string;
  firstName: string;
  middleName?: string;
  firstSurname: string;
  secondSurname?: string;
  email: string;
}
