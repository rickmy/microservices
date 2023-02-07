import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymptomRoutingModule } from './symptom-routing.module';
import { CreateSymptomComponent } from './create-symptom/create-symptom.component';
import { ListSymptomComponent } from './list-symptom/list-symptom.component';
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
    CreateSymptomComponent,
    ListSymptomComponent,
    
  ],
  imports: [
    CommonModule,
    SymptomRoutingModule,
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
export class SymptomModule { }
