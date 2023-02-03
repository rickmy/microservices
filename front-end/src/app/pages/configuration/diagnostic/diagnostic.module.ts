import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosticRoutingModule } from './diagnostic-routing.module';
import { CreateDiagnosticComponent } from './create-diagnostic/create-diagnostic.component';
import { ListDiagnosticComponent } from './list-diagnostic/list-diagnostic.component';


@NgModule({
  declarations: [
    CreateDiagnosticComponent,
    ListDiagnosticComponent
  ],
  imports: [
    CommonModule,
    DiagnosticRoutingModule
  ]
})
export class DiagnosticModule { }
