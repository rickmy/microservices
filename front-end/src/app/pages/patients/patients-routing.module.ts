import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPatientsComponent} from "./list-patients/list-patients.component";
import {CreatePatientComponent} from "./create-patient/create-patient.component";

const routes: Routes = [
    {
        path: '',
        component: ListPatientsComponent,
    },
    {
        path: 'create',
        component: CreatePatientComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
