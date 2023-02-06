import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorComponent} from "../../doctor/list-doctor/list-doctor.component";
import {ListTreatmentComponent} from "./list-treatment/list-treatment.component";
import {CreatePatientComponent} from "../../patients/create-patient/create-patient.component";
import {CreateTreatmentComponent} from "./create-treatment/create-treatment.component";

const routes: Routes = [
    {
        path: '',
        component: ListTreatmentComponent,
    },
    {
        path: 'create',
        component: CreateTreatmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentRoutingModule { }
