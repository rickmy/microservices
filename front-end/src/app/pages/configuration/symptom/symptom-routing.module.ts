import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDoctorComponent} from "../../doctor/list-doctor/list-doctor.component";
import {ListSymptomComponent} from "./list-symptom/list-symptom.component";
import {CreatePatientComponent} from "../../patients/create-patient/create-patient.component";
import {CreateSymptomComponent} from "./create-symptom/create-symptom.component";

const routes: Routes = [
    {
        path: '',
        component: ListSymptomComponent
    },
    {
        path: 'create',
        component: CreateSymptomComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymptomRoutingModule { }
