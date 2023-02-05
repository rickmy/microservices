import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  url = environment.api_url + 'diagnostic';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private http: HttpClient,
    private managerMessageService: ManagerMessageService

  ) {}

  save(data: CreateDiagnosticModel) : Observable<CreateDiagnosticModel> {
    data.status = true;
    return this.http.post<CreateDiagnosticModel>(this.url, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Diagnóstico creado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

}
