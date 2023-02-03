import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorComponent} from "./list-doctor/list-doctor.component";
import {CreatePatientComponent} from "../patients/create-patient/create-patient.component";
import {CreateDoctorComponent} from "./create-doctor/create-doctor.component";

const routes: Routes = [
    {
        path: '',
        component: ListDoctorComponent
    },
    {
        path: 'create',
        component: CreateDoctorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
