import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
    declarations: [
    StatusPipe
  ],
    imports: [
        CommonModule,
        ToastModule,
    ],
    providers: [
        MessageService
    ],
    exports: [
        StatusPipe,
        
    ]
})
export class SharedModule {
}
