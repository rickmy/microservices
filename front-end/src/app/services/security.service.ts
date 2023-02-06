import { Injectable } from '@angular/core';
import {LoginResponse} from "../models/auth/login-response";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

    setAuthUser(authUser: LoginResponse): void {
        localStorage.setItem('currentUser', JSON.stringify(authUser));
    }

    setUser(user: any): void {
        localStorage.setItem('userResource', JSON.stringify(user));
    }

    getAccessToken(): string | null {
        let tokens = JSON.parse(localStorage.getItem('currentUser')!) as LoginResponse;
        return tokens?.accessToken;
    }

    getUser(): any {
        return JSON.parse(localStorage.getItem('userResource')!);
    }


    logout() {
        localStorage.clear();
        //TODO: redirect to login
    }
}
