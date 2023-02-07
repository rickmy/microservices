import { Component, OnInit } from '@angular/core';
import { CreateTreatmentModel } from 'src/app/models/treatment/create-treatment-model';
import { TreatmentService } from 'src/app/services/api/treatment.service';

@Component({
  selector: 'app-list-treatment',
  templateUrl: './list-treatment.component.html',
  styleUrls: ['./list-treatment.component.scss']
})
export class ListTreatmentComponent implements OnInit {

  treatmentDialog: boolean = false;
  treatments: CreateTreatmentModel[] = [];

  constructor(
    
    private treatmentService: TreatmentService

  ) { }

  ngOnInit(): void {

    this.findAllTreatment();

  }

  showDialogCreate() {
    this.treatmentDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.treatmentDialog = display;
  }

  findAllTreatment():void {
    this.treatmentService.findAllTreatment().subscribe(
      (data) => {
        this.treatments = data;
      }

    );

  }
}
