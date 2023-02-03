import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import {RouterModule} from "@angular/router";
import {SymptomModule} from "./symptom/symptom.module";
import {TreatmentModule} from "./treatment/treatment.module";
import {DiagnosticModule} from "./diagnostic/diagnostic.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
      RouterModule,SymptomModule,
      TreatmentModule,DiagnosticModule
  ]
})
export class ConfigurationModule { }
