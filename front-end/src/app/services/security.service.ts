import { Injectable } from '@angular/core';
import {LoginResponse} from "../models/auth/login-response";
import {TokenAuth} from "../models/auth/token-auth";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

    setAuthUser(token: TokenAuth): void {
        localStorage.setItem('currentUser', JSON.stringify(token));
    }

    setUser(user: any): void {
        localStorage.setItem('userResource', JSON.stringify(user));
    }

    getAccessToken(): string | null {
        let tokens = JSON.parse(localStorage.getItem('currentUser')!) as TokenAuth;
        return tokens?.token;
    }

    getUser(): any {
        return JSON.parse(localStorage.getItem('userResource')!);
    }


    logout() {
        localStorage.clear();
        //TODO: redirect to login
    }
}
