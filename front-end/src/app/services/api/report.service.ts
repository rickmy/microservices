import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, generate, Observable, tap} from "rxjs";
import {map} from "rxjs/operators";
import {ManagerMessageService} from "../../shared/services/manager-message.service";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    api_url = environment.api_url + 'reports';

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(
        private http: HttpClient,
        private managerMessage: ManagerMessageService
    ) {
    }

    getReportById(id: number): Observable<Blob> {
        return this.http.get<Blob>(this.api_url + '/' + id, {headers: this.headers})
            .pipe(
                map((data: any) => {return data;},),
                catchError((error: any) => {
                    this.managerMessage.showError(error);
                    return error;
                })
            );

    }

}
