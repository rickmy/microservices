import { Component, OnInit } from '@angular/core';
import { CreateSymptomModel } from 'src/app/models/symptom/create-symptom-model';
import { SymptomService } from 'src/app/services/api/symptom.service';

@Component({
  selector: 'app-list-symptom',
  templateUrl: './list-symptom.component.html',
  styleUrls: ['./list-symptom.component.scss']
})
export class ListSymptomComponent implements OnInit {

  symptomDialog: boolean = false;
  symptom: CreateSymptomModel;
  

  constructor(

     private symptomService: SymptomService

  ) { }

  symptoms: CreateSymptomModel[] = [];

  ngOnInit(): void {

    this.findAllSymptom();

  }
  showDialogCreate() {
    this.symptomDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.symptomDialog = display;
  }

  

  

  findAllSymptom():void {
    this.symptomService.findAllSymptom().subscribe(
      (data) => {
        this.symptoms = data;
      }
    );
  }

}


