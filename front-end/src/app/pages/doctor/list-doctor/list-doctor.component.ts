import { Component, OnInit } from '@angular/core';
import { CreateDoctorModel } from 'src/app/models/doctor/create-doctor-model';
import { DoctorService } from 'src/app/services/api/doctor.service';
import {ListDoctorModel} from "../../../models/doctor/list-doctor-model";
import {Diagnostic} from "../../../models/diagnostic/diagnostic.model";
import {EditDoctorModel} from "../../../models/doctor/edit-doctor-model";
import {ConfirmationService} from "primeng/api";

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {
    doctorDialog: boolean = false;
    doctorUpdateDialog: boolean = false;
    selectDoctor: ListDoctorModel;


    doctors: ListDoctorModel[] = [];

    constructor(
        private doctorService: DoctorService,
        private confirmationService: ConfirmationService
    ) { }
    ngOnInit(): void {

        this.findAllDoctor();

    }
    showDialogCreate() {
        this.doctorDialog = true;
    }

    hideDialogCreate(display: boolean) {
        this.doctorDialog = display;
        this.findAllDoctor();
    }

    findAllDoctor():void {
        this.doctorService.findAllDoctor().subscribe(
            (data) => {
                this.doctors = data;
            }

        );
    }

    showDialogUpdate(selectDoctor: ListDoctorModel) {
        this.selectDoctor = selectDoctor;
        console.log(this.selectDoctor);
        this.doctorUpdateDialog = true;
    }

    hideDialogUpdate(display: boolean) {
        this.doctorUpdateDialog = display;
        this.findAllDoctor();
        this.selectDoctor = null;
    }

    confirm(event: Event, id: number) {
        this.confirmationService.confirm({
            target: event.target,
            message: '¿Seguro que desea eliminar el doctor?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Si, eliminar',
            rejectLabel: 'No, cancelar',
            acceptButtonStyleClass: 'p-button-outlined p-button-danger',
            rejectButtonStyleClass: 'p-button-outlined p-button-secondary',

            accept: () => {

                this.deleteDoctor(id);
            },
            reject: () => {
                //reject action
            }
        });
    }

    deleteDoctor(id: number) {
        this.doctorService.deleteDoctorById(id).subscribe(
            (data) => {
                this.findAllDoctor();
            }
        );
    }


}
