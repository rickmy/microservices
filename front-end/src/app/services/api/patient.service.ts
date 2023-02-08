import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {PatientModel} from "../../models/patient/patient-model";
import {map} from "rxjs/operators";
import {CreatePatientComponent} from "../../pages/patients/create-patient/create-patient.component";
import {CreatePatientModel} from "../../models/patient/create-patient-model";
import {ManagerMessageService} from "../../shared/services/manager-message.service";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    api_url = environment.api_url + 'patients';

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(
        private http: HttpClient,
        private managerMessage: ManagerMessageService
    ) {
    }

    getPatients(): Observable<PatientModel[]> {
        return this.http.get<PatientModel[]>(this.api_url, {headers: this.headers})
            .pipe(
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }
    getPatientById(id: number): Observable<PatientModel> {
        return this.http.get<PatientModel>(this.api_url + '/' + id, {headers: this.headers})
            .pipe(
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }

    postCreatePatient(patient: CreatePatientModel): Observable<PatientModel> {
        return this.http.post<PatientModel>(this.api_url, patient, {headers: this.headers})
            .pipe(
                tap(()=> this.managerMessage.showSuccess('Paciente creado correctamente')),
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }

    postLoadPatients(file: File): Observable<PatientModel[]> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<PatientModel[]>(this.api_url + '/loadPatients', formData)
            .pipe(
                tap(()=> this.managerMessage.showSuccess('Pacientes cargados correctamente')),
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }

    putUpdatePatient(patient: PatientModel): Observable<PatientModel> {
        return this.http.put<PatientModel>(this.api_url + '/' + patient.id, patient, {headers: this.headers})
            .pipe(
                tap(()=> this.managerMessage.showSuccess('Paciente actualizado correctamente')),
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }

    deletePatient(id: number): Observable<{ status: boolean, message: string }> {
        return this.http.delete<{ status: boolean, message: string }>(this.api_url + '/' + id, {headers: this.headers})
            .pipe(
                tap(()=> this.managerMessage.showSuccess('Paciente eliminado correctamente')),
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );
    }
}
