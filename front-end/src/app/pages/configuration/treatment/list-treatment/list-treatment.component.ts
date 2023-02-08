import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CreateTreatmentModel } from 'src/app/models/treatment/create-treatment-model';
import { Treatment } from 'src/app/models/treatment/treatment.model';
import { TreatmentService } from 'src/app/services/api/treatment.service';

@Component({
  selector: 'app-list-treatment',
  templateUrl: './list-treatment.component.html',
  styleUrls: ['./list-treatment.component.scss']
})
export class ListTreatmentComponent implements OnInit {

  treatmentUpdateDialog: boolean = false;
  treatmentDialog: boolean = false;
  selectTreatment: Treatment;
  

  constructor(
    
    private treatmentService: TreatmentService,
    private confirmationService: ConfirmationService

  ) { }

  treatments: CreateTreatmentModel[] = [];

  ngOnInit(): void {

    this.findAllTreatment();

  }

  showDialogCreate() {
    this.treatmentDialog = true;
  }

  hideDialogCreate(display: boolean) {
    this.treatmentDialog = display;
    this.findAllTreatment();
  }

  showDialogUpdate(selectTreatment: Treatment) {
    this.selectTreatment = selectTreatment;
    this.treatmentUpdateDialog = true;
  }

  hideDialogUpdate(display: boolean) {
    this.treatmentUpdateDialog = display;
    this.findAllTreatment();
    this.selectTreatment = null;
  }


  confirm(event: Event, data: Treatment) {
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Seguro que desea eliminar el tratamiento?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si, eliminar',
      rejectLabel: 'No, cancelar',
      acceptButtonStyleClass: 'p-button-outlined p-button-danger',
      rejectButtonStyleClass: 'p-button-outlined p-button-secondary',


      accept: () => {
        data.status = false;
        this.deleteTreatment(data.id, data);
      },
      reject: () => {

      }
    });
  }

  findAllTreatment():void {
    this.treatmentService.findAllTreatment().subscribe(
      (data) => {
        this.treatments = data;
      }
    );
  }

  deleteTreatment(id: number, data: Treatment): void {
    this.treatmentService.deleteTreatmentById(id, data).subscribe(
      (data) => {
        this.findAllTreatment();
      }
    );
  }

}
