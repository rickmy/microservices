import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { Diagnostic } from 'src/app/models/diagnostic/diagnostic.model';
import { DiagnosticService } from 'src/app/services/api/diagnostic.service';

@Component({
  selector: 'app-list-diagnostic',
  templateUrl: './list-diagnostic.component.html',
  styleUrls: ['./list-diagnostic.component.scss']
})
export class ListDiagnosticComponent implements OnInit {
  diagnosticDialog: boolean = false;
  diagnosticUpdateDialog: boolean = false;
  selectDiagnostic: Diagnostic;

  constructor(
    private diagnosticService: DiagnosticService,
    private confirmService: ConfirmationService
  ) { }

  diagnostics: CreateDiagnosticModel[] = [];


  ngOnInit(): void {

    this.findAllDiagnostic();

  }
  showDialogCreate() {
    this.diagnosticDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.diagnosticDialog = display;
    this.findAllDiagnostic();
  }

  findAllDiagnostic():void {
    this.diagnosticService.findAllDiagnostic().subscribe(
      (data) => {
        this.diagnostics = data;
      }
    );
  }

  showDialogUpdate(selectDiagnostic: Diagnostic) {
    this.selectDiagnostic = selectDiagnostic;
    console.log(this.selectDiagnostic);
    this.diagnosticUpdateDialog = true;
  }

  hideDialogUpdate(display: boolean) {
    this.diagnosticUpdateDialog = display;
    this.findAllDiagnostic();
    this.selectDiagnostic = null;
  }

  confirm(event: Event, data: Diagnostic) {
    this.confirmService.confirm({
        target: event.target,
        message: '¿Seguro que desea eliminar el diagnóstico?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Si, eliminar',
        rejectLabel: 'No, cancelar',
        acceptButtonStyleClass: 'p-button-danger',
        rejectButtonStyleClass: 'p-button-secondary',

        accept: () => {
            data.status = false;
            this.deleteDiagnostic(data.id, data);
        },
        reject: () => {
            //reject action
        }
    });
}

deleteDiagnostic(id: number, data:Diagnostic) {
  this.diagnosticService.deleteDiagnosticById(id, data).subscribe(
    (data) => {
      this.findAllDiagnostic();
    }
  );
}






}
