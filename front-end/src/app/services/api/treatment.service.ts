import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateTreatmentModel } from 'src/app/models/treatment/create-treatment-model';
import { Treatment } from 'src/app/models/treatment/treatment.model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  updateStatus(id: number, estado: boolean) {
    throw new Error('Method not implemented.');
  }

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

  findAllTreatment(): Observable<CreateTreatmentModel[]> {
    return this.http.get<CreateTreatmentModel[]>(this.url, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Tratamientos cargados con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err);
        throw err;
      }));
  }

  updateTreatmentById(id: number, data: CreateTreatmentModel): Observable<CreateTreatmentModel> {
    return this.http.patch<CreateTreatmentModel>(this.url + '/' + id, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Tratamiento editado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

  deleteTreatmentById(id: number, data:Treatment): Observable<CreateTreatmentModel> {
    return this.http.patch<CreateTreatmentModel>(this.url + '/' + id, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Tratamiento eliminado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

}
