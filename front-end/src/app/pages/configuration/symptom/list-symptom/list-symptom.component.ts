import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CreateSymptomModel } from 'src/app/models/symptom/create-symptom-model';
import { Symptom } from 'src/app/models/symptom/symptom.model';
import { SymptomService } from 'src/app/services/api/symptom.service';

@Component({
  selector: 'app-list-symptom',
  templateUrl: './list-symptom.component.html',
  styleUrls: ['./list-symptom.component.scss']
})
export class ListSymptomComponent implements OnInit {

  symptomDialog: boolean = false;
  symptomUpdateDialog: boolean = false;
  selectSymptom: Symptom;
  
  constructor(

     private symptomService: SymptomService,
     private confirmService: ConfirmationService

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
    this.findAllSymptom();
  }

  showDialogUpdate(selectSymptom: Symptom) {
    this.selectSymptom = selectSymptom;
    console.log(this.selectSymptom);
    this.symptomUpdateDialog = true;
  }

  hideDialogUpdate(display: boolean) {
    this.symptomUpdateDialog = display;
    this.findAllSymptom();
    this.selectSymptom = null;
  }

  confirm(event: Event, data: Symptom) {
    this.confirmService.confirm({
        target: event.target,
        message: '¿Seguro que desea eliminar el síntoma?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Si, eliminar',
        rejectLabel: 'No, cancelar',
        acceptButtonStyleClass: 'p-button-outlined p-button-danger',
        rejectButtonStyleClass: 'p-button-outlined p-button-secondary',

        accept: () => {
            data.status = false;
            this.deleteSymptom(data.id, data);
        },
        reject: () => {
            //reject action
        }
    });    
  }
  findAllSymptom():void {
    this.symptomService.findAllSymptom().subscribe(
      (data) => {
        this.symptoms = data;
      }
    );
  }
  deleteSymptom(id: number, data: Symptom) {
    this.symptomService.deleteSymptomById(id, data).subscribe(
      (data) => {
        this.findAllSymptom();
      }
    );
  }
  
}


