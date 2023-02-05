import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import {RouterModule} from "@angular/router";
import {SymptomModule} from "./symptom/symptom.module";
import {TreatmentModule} from "./treatment/treatment.module";
import {DiagnosticModule} from "./diagnostic/diagnostic.module";
import { ConfigurationComponent } from './configuration/configuration.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    RouterModule,SymptomModule,
    TreatmentModule,DiagnosticModule,
    CardModule,
    RouterModule,
    ButtonModule
  ]
})
export class ConfigurationModule { }
