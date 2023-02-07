import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateDoctorModel } from 'src/app/models/doctor/create-doctor-model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';
import {CreateDiagnosticModel} from "../../models/diagnostic/create-diagnostic-model";
import {ListDoctorModel} from "../../models/doctor/list-doctor-model";
import {Diagnostic} from "../../models/diagnostic/diagnostic.model";
import {EditDoctorModel} from "../../models/doctor/edit-doctor-model";
import {DoctorModule} from "../../pages/doctor/doctor.module";
import {DoctorModel} from "../../models/doctor/doctor-model";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    url = environment.api_url + 'doctor';
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        private http: HttpClient,
        private managerMessageService: ManagerMessageService
    ) {
    }

    save(data: CreateDoctorModel): Observable<CreateDoctorModel> {
        data.specialtyId = 1;
        return this.http.post<CreateDoctorModel>(this.url, data, {headers: this.headers})
            .pipe(
                tap((data) => this.managerMessageService.showSuccess('Doctor creado con éxito!')),
                catchError((err) => {
                    this.managerMessageService.showError(err.message);
                    throw err;
                }));
    }

    findAllDoctor(): Observable<ListDoctorModel[]> {
        return this.http.get<ListDoctorModel[]>(this.url, {headers: this.headers})
            .pipe(
                catchError((err) => {
                    this.managerMessageService.showError(err);
                    throw err;
                }));
    }

    updateDoctorById(id: number, data:EditDoctorModel): Observable<ListDoctorModel> {
        return this.http.put<ListDoctorModel>(this.url + '/' + id, data, {headers: this.headers})
            .pipe(
                tap((data) => this.managerMessageService.showSuccess('Doctor actualizado con éxito!')),
                catchError((err) => {
                    this.managerMessageService.showError(err);
                    throw err;
                }));
    }

    deleteDoctorById(id: number): Observable<any> {
        return this.http.delete<any>(this.url + '/' + id,  {headers: this.headers})
            .pipe(
                tap((data) => this.managerMessageService.showSuccess('Doctor eliminado con éxito!')),
                catchError((err) => {
                    this.managerMessageService.showError(err);
                    throw err;
                }));
    }
    findDoctorById(id:number): Observable<DoctorModel>{
        return this.http.get<DoctorModel>(this.url + '/' + id, {headers: this.headers} )

            .pipe(
                catchError((err) => {
                    this.managerMessageService.showError(err);
                    throw err;
                }));
    }

}
