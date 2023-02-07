import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {PatientModel} from "../../models/patient/patient-model";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    api_url = environment.api_url + 'patients';

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(
        private http: HttpClient
    ) {
    }

    getPatients(): Observable<PatientModel[]> {
        return this.http.get<PatientModel[]>(this.api_url, {headers: this.headers})
            .pipe(
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    return error;
                })
            );
    }
}
