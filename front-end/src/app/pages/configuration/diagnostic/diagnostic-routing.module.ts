import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePatientComponent} from "../../patients/create-patient/create-patient.component";
import {ListDiagnosticComponent} from "./list-diagnostic/list-diagnostic.component";
import {CreateDiagnosticComponent} from "./create-diagnostic/create-diagnostic.component";

const routes: Routes = [
    {
        path: '',
        component:ListDiagnosticComponent
    },
    {
        path: 'create',
        component: CreateDiagnosticComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticRoutingModule { }
