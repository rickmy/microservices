import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticRoutingModule } from './diagnostic-routing.module';
import { CreateDiagnosticComponent } from './create-diagnostic/create-diagnostic.component';
import { ListDiagnosticComponent } from './list-diagnostic/list-diagnostic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    CreateDiagnosticComponent,
    ListDiagnosticComponent
  ],
  imports: [
    CommonModule,
    DiagnosticRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule

  ]
})
export class DiagnosticModule { }
