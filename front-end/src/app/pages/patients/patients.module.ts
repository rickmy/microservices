import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import {ButtonModule} from "primeng/button";
import { ListPatientComponent } from './list-patient/list-patient.component';


@NgModule({
  declarations: [
    
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
