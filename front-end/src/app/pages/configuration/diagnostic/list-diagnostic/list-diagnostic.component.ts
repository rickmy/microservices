import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-diagnostic',
  templateUrl: './list-diagnostic.component.html',
  styleUrls: ['./list-diagnostic.component.scss']
})
export class ListDiagnosticComponent implements OnInit {
  diagnosticDialog: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showDialogCreate() {
    this.diagnosticDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.diagnosticDialog = display;
  }
  
  

}
