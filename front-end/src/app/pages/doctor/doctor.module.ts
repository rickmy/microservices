import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import {ListDoctorComponent} from "./list-doctor/list-doctor.component";
import {CreateDoctorComponent} from "./create-doctor/create-doctor.component";


@NgModule({
  declarations: [ ListDoctorComponent,CreateDoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
