import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    api_persona = environment.api_personas

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(
        private http: HttpClient
    ) {
    }

    getPersonas(): Observable<any> {
        return this.http.get<any>(`${this.api_persona}patient`, {headers: this.headers})
    }
}
