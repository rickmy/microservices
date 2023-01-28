import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppoinmentRoutingModule } from './appoinment-routing.module';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';


@NgModule({
  declarations: [
    CreateAppoinmentComponent
  ],
  imports: [
    CommonModule,
    AppoinmentRoutingModule
  ]
})
export class AppoinmentModule { }
