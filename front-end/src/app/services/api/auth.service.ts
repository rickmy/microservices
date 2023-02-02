import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {TokenAuth} from "../../models/auth/token-auth";
import {ManagerMessageService} from "../../shared/services/manager-message.service";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiUrl = environment.api_url;

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
    })

    constructor(
        private http: HttpClient,
        private managerMessageService: ManagerMessageService,
        private router: Router
    ) {
    }

    postLogin(username: string, password: string): Observable<TokenAuth> {
        return this.http.post<TokenAuth>(this.apiUrl + 'auth/login', {
                username,
                password
            }, {headers: this.headers}
        ).pipe(
            tap((response: TokenAuth) => {
                localStorage.setItem('token', response.token)
            }),
            tap((response: TokenAuth) => {
                this.managerMessageService.showSuccess('Bienvenido a Bienestar Estudiantil!');
                this.router.navigate(['./dashboard']);
            }),
            catchError((error) => {
                this.managerMessageService.showErrorGeneric();
                throw error;
            })
        )
    }
}
