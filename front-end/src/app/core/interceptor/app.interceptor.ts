import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {SecurityService} from "../../services/security.service";
import {map} from "rxjs/operators";
import {BlockUiService} from "../../services/block-ui.service";
import {ManagerMessageService} from "../../shared/services/manager-message.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {


    constructor(
        protected securityService: SecurityService,
        private blockUiService: BlockUiService,
        private managerMessageService: ManagerMessageService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        let req = request;

        if (this.securityService.getAccessToken()) {
            req = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.securityService.getAccessToken()}`
                }
            });
        }

        this.blockUiService.show();

        return next.handle(req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.securityService.logout();
                    }
                    if (error.status === 500){
                        return throwError(() => Error('Error en el servidor'));
                    }
                    this.managerMessageService.showError(error.error.message);
                    return throwError(() => Error(error.error.message));
                }),
                finalize(() => {
                    this.blockUiService.hide();
                })
            )
    }
}
