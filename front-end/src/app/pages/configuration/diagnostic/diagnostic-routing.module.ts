import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateDiagnosticComponent} from "./create-diagnostic/create-diagnostic.component";

const routes: Routes = [
    {
        path:'create',component: CreateDiagnosticComponent

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticRoutingModule { }
