import { NgModule } from '@angular/core';
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


@NgModule({
    declarations: [
        CreateDoctorComponent,ListDoctorComponent
    ],
    imports: [
        CommonModule,
        DoctorRoutingModule,
        RouterModule,
        CardModule,
        ButtonModule,
        DialogModule,
        FormsModule,ReactiveFormsModule,InputTextModule,
        InputTextareaModule
    ]
})
export class DoctorModule { }
