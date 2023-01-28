import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthzRoutingModule } from './authz-routing.module';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthzRoutingModule,
      PasswordModule,
      CheckboxModule,
      FormsModule,
      ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      RippleModule
  ]
})
export class AuthzModule { }
