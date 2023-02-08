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
import {FileUploadModule} from "primeng/fileupload";
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";


@NgModule({
    declarations: [

        CreatePatientComponent,
        ListPatientComponent,
        UpdatePatientComponent
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
        KeyFilterModule,
        FileUploadModule,
        ConfirmPopupModule
    ],
    providers: [
        ConfirmationService
    ]
})
export class PatientsModule {
}
