import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymptomRoutingModule } from './symptom-routing.module';
import { CreateSymptomComponent } from './create-symptom/create-symptom.component';
import { ListSymptomComponent } from './list-symptom/list-symptom.component';


@NgModule({
  declarations: [
    CreateSymptomComponent,
    ListSymptomComponent
  ],
  imports: [
    CommonModule,
    SymptomRoutingModule
  ]
})
export class SymptomModule { }
