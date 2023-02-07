import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateDoctorModel } from 'src/app/models/doctor/create-doctor-model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';
import {CreateDiagnosticModel} from "../../models/diagnostic/create-diagnostic-model";

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

    ) {}

    save(data: CreateDoctorModel) : Observable<CreateDoctorModel> {

        return this.http.post<CreateDoctorModel>(this.url, data, {headers: this.headers})
            .pipe(
                tap((data) => this.managerMessageService.showSuccess('Doctor creado con éxito!')),
                catchError((err) => {
                    this.managerMessageService.showError(err.message);
                    throw err;
                }));
    }

    findAllDoctor(): Observable<CreateDoctorModel[]> {
        return this.http.get<CreateDoctorModel[]>(this.url, {headers: this.headers})
            .pipe(
                tap((data) => this.managerMessageService.showSuccess('Doctor creado con éxito!')),
                catchError((err) => {
                    this.managerMessageService.showError(err);
                    throw err;
                }));
    }

}
