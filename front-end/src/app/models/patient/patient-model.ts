export interface PatientModel {
    id:            number;
    dni:           string;
    firstName:     string;
    middleName:    string;
    firstSurname:  string;
    secondSurname: string;
    sex:           string;
    DateOfBirth:   Date;
    civilStatus:   string;
    email:         string;
    address:       string;
    phone:         string;
    disabilityId:  number;
    percentage:    number;
    status:        string;
}
