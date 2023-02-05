import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-symptom',
  templateUrl: './list-symptom.component.html',
  styleUrls: ['./list-symptom.component.scss']
})
export class ListSymptomComponent implements OnInit {

  symptomDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  showDialogCreate() {
    this.symptomDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.symptomDialog = display;
  }

}


