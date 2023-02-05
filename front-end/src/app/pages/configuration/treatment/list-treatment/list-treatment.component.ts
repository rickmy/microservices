import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-treatment',
  templateUrl: './list-treatment.component.html',
  styleUrls: ['./list-treatment.component.scss']
})
export class ListTreatmentComponent implements OnInit {

  treatmentDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialogCreate() {
    this.treatmentDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.treatmentDialog = display;
  }

}
