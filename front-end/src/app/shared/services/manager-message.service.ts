import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ManagerMessageService {


    constructor(private messageService: MessageService) { }

    public showSuccess(message: string): void {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message  });
    }

    public showInfo(message: string): void {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: message });
    }

    public showWarn(message: string): void {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: message });
    }

    public showError(message: string): void {
        if(!message) {
            this.showErrorGeneric();
            return;
        }
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }

    public clear(): void {
        this.messageService.clear();
    }

    public showErrorGeneric(): void {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error inesperado, por favor intente más tarde' });
    }
}
