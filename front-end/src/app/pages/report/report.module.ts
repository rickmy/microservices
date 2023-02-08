import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportRoutingModule} from './report-routing.module';

import {ButtonModule} from "primeng/button";

import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {KeyFilterModule} from "primeng/keyfilter";
import {FileUploadModule} from "primeng/fileupload";

import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ReportComponent} from "./report/report.component";


@NgModule({
    declarations: [

        ReportComponent

    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
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
export class ReportModule {
}
