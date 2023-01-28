import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAppoinmentComponent} from "./create-appoinment/create-appoinment.component";

const routes: Routes = [
    {
        path: 'create',
        component: CreateAppoinmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppoinmentRoutingModule { }
