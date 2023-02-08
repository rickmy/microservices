import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { CreateSymptomModel } from 'src/app/models/symptom/create-symptom-model';
import { Symptom } from 'src/app/models/symptom/symptom.model';
import { ManagerMessageService } from 'src/app/shared/services/manager-message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  updateStatus(id: number, estado: boolean) {
    throw new Error('Method not implemented.');
  }
  url = environment.api_url + 'symptom';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private managerMessageService: ManagerMessageService

  ) { }

  save(data: CreateSymptomModel) : Observable<CreateSymptomModel> {
    data.status = true;
    return this.http.post<CreateSymptomModel>(this.url, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Síntoma creado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

  
  

  findAllSymptom(): Observable<CreateSymptomModel[]> {
    return this.http.get<CreateSymptomModel[]>(this.url, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Síntomas cargados con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err);
        throw err;
      }));
  }

  updateSymptomById(id: number, data: CreateSymptomModel): Observable<CreateSymptomModel> {
    return this.http.patch<CreateSymptomModel>(this.url + '/' + id, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Síntoma editado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }

  deleteSymptomById(id: number, data:Symptom): Observable<CreateSymptomModel> {
    return this.http.patch<CreateSymptomModel>(this.url + '/' + id, data, {headers: this.headers})
    .pipe(
      tap((data) => this.managerMessageService.showSuccess('Síntoma eliminado con éxito!')),
      catchError((err) => {
        this.managerMessageService.showError(err.message);
        throw err;
      }));
  }



  
}
