import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import {RouterModule} from "@angular/router";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateDoctorComponent} from "./create-doctor/create-doctor.component";
import {ListDoctorComponent} from "./list-doctor/list-doctor.component";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TableModule} from "primeng/table";
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import {SharedModule} from "../../shared/shared.module";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmationService} from "primeng/api";


@NgModule({

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    declarations: [
        CreateDoctorComponent,ListDoctorComponent, EditDoctorComponent
    ],
    imports: [
        CommonModule,
        DoctorRoutingModule,
        RouterModule,
        CardModule,
        ButtonModule,
        DialogModule,
        FormsModule,ReactiveFormsModule,InputTextModule,TableModule,
        InputTextareaModule,SharedModule,ConfirmPopupModule

    ],

    providers: [

        ConfirmationService
    ]
})
export class DoctorModule { }
