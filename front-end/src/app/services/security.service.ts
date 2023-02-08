import { Injectable } from '@angular/core';
import {LoginResponse} from "../models/auth/login-response";
import {TokenAuth} from "../models/auth/token-auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

    constructor(
        private router: Router
    ) { }
    setAuthUser(token: TokenAuth): void {
        localStorage.setItem('currentUser', JSON.stringify(token));
    }

    setUser(name:string,role:string): void {
        let user = {
            name: name,
            role: role
        }
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
        this.router.navigate(['/auth/login']);
    }
}
