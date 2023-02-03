import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticRoutingModule } from './diagnostic-routing.module';
import { CreateDiagnosticComponent } from './create-diagnostic/create-diagnostic.component';


@NgModule({
  declarations: [
    CreateDiagnosticComponent
  ],
  imports: [
    CommonModule,
    DiagnosticRoutingModule
  ]
})
export class DiagnosticModule { }
