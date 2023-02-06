import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPatientComponent} from "./list-patient/list-patient.component";
import {CreatePatientComponent} from "./create-patient/create-patient.component";

const routes: Routes = [

    {
        path: '',
        component: ListPatientComponent,
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
