import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {ButtonModule} from "primeng/button";
import {ListPatientComponent} from './list-patient/list-patient.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {KeyFilterModule} from "primeng/keyfilter";


@NgModule({
    declarations: [

        CreatePatientComponent,
        ListPatientComponent
    ],
    imports: [
        CommonModule,
        PatientsRoutingModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        InputTextareaModule,
        ConfirmDialogModule,
        DialogModule,
        FormsModule,
        ReactiveFormsModule,
        KeyFilterModule
    ],
    providers: [
        ConfirmationService
    ]
})
export class PatientsModule {
}
