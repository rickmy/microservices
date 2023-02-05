import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateTreatmentModel } from 'src/app/models/treatment/create-treatment-model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  url = environment.api_url + 'treatment';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private managerMessageService: ManagerMessageService
  ) { }

  save(data: CreateTreatmentModel) : Observable<CreateTreatmentModel> {
    data.status = true;
    return this.http.post<CreateTreatmentModel>(this.url, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Tratamiento creado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

}
