import { Component, OnInit } from '@angular/core';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { DiagnosticService } from 'src/app/services/api/diagnostic.service';

@Component({
  selector: 'app-list-diagnostic',
  templateUrl: './list-diagnostic.component.html',
  styleUrls: ['./list-diagnostic.component.scss']
})
export class ListDiagnosticComponent implements OnInit {
  public estadoActivo: CreateDiagnosticModel["status"] = true;
  diagnosticDialog: boolean = false;
  constructor(
    private diagnosticService: DiagnosticService
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

  
  
  
}
