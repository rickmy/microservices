import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import {ButtonModule} from "primeng/button";
import { ListPatientComponent } from './list-patient/list-patient.component';


@NgModule({
  declarations: [
    ListPatientsComponent,
    CreatePatientComponent,
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
      ButtonModule
  ]
})
export class PatientsModule { }
