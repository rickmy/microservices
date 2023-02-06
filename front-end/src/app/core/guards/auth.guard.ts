import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from "../../services/security.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        protected router: Router,
        protected securityService: SecurityService
    ) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const isAuthenticated = !!this.securityService.getAccessToken() ? true : false;
        if (!isAuthenticated) {
            this.router.navigate(['/auth/login']);
            return false;
        } else {
            return true;
        }
    }
}
