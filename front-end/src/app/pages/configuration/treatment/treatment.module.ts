import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentRoutingModule } from './treatment-routing.module';
import { CreateTreatmentComponent } from './create-treatment/create-treatment.component';
import { ListTreatmentComponent } from './list-treatment/list-treatment.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateTreatmentComponent,
    ListTreatmentComponent
  ],
  imports: [
    CommonModule,
    TreatmentRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    SharedModule

  ]
})
export class TreatmentModule { }
