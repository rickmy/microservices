import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentRoutingModule } from './treatment-routing.module';
import { CreateTreatmentComponent } from './create-treatment/create-treatment.component';
import { ListTreatmentComponent } from './list-treatment/list-treatment.component';


@NgModule({
  declarations: [
    CreateTreatmentComponent,
    ListTreatmentComponent
  ],
  imports: [
    CommonModule,
    TreatmentRoutingModule
  ]
})
export class TreatmentModule { }
