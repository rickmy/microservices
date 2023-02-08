import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {TokenAuth} from "../../models/auth/token-auth";
import {ManagerMessageService} from "../../shared/services/manager-message.service";
import {Router} from "@angular/router";
import {SecurityService} from "../security.service";

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
        private router: Router,
        private securityService: SecurityService
    ) {
    }

    postLogin(username: string, password: string): Observable<TokenAuth> {
        return this.http.post<TokenAuth>(this.apiUrl + 'auth/login', {
                username,
                password
            }, {headers: this.headers}
        ).pipe(
            tap((response: TokenAuth) => {
                this.securityService.setAuthUser(response);
                var base64Url = response.token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                let json = JSON.parse(window.atob(base64));
                this.securityService.setUser(json.sub, json.rol);
                this.managerMessageService.showSuccess('Bienvenido a Bienestar Estudiantil!');
                this.router.navigate(['/']);
            }),
            catchError((error) => {
                this.managerMessageService.showError(error);
                throw error;
            })
        )
    }
}
