import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/api/patient.service";
import {PatientModel} from "../../../models/patient/patient-model";
import {ConfirmationService} from "primeng/api";

@Component({
    selector: 'app-list-patient',
    templateUrl: './list-patient.component.html',
    styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
    patients: PatientModel[] = [];
    loading = false;
    dPatientCreate = false;
    dPatientUpdate = false;
    patientSelected: PatientModel;
    constructor(
        private patientService: PatientService,
        private confirmationService: ConfirmationService,
    ) {
    }

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients() {
        this.loading = true;
        this.patientService.getPatients()
            .subscribe({
                next: (data: any) => {
                    console.log(data)
                    this.patients = data;
                    this.loading = false;
                },
                error: (err) => {
                    console.log(err)
                    this.loading = false;
                }
            });
    }

    hideDialogCreatePatient(display: boolean){
        this.dPatientCreate = display;
        if(!display)
        this.getPatients()
    }

    upLoadPatients(event:any){
        const file = event.files[0];
        this.patientService.postLoadPatients(file)
            .subscribe({
                next: (data) => {
                    console.log(data)
                    this.patients.push(...data);
                },
                error: (err) => {
                    console.log(err)
                }
            })
    }

    showDialogUpdatePatient(patient: PatientModel){
        this.patientSelected = patient;
        this.dPatientUpdate = true;
    }

    hideDialogUpdatePatient(display: boolean){
        this.dPatientUpdate = display;
        this.getPatients()
    }

    confirm(event: Event, id: number) {
        this.confirmationService.confirm({
            target: event.target,
            message: '¿Seguro que desea eliminar este paciente',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Si, eliminar',
            rejectLabel: 'No, cancelar',
            acceptButtonStyleClass: 'p-button-danger',
            rejectButtonStyleClass: 'p-button-help',
            accept: () => {

                this.deletePatient(id);
            },
            reject: () => {
                //reject action
            }
        });
    }

    deletePatient(id: number) {
        this.patientService.deletePatient(id).subscribe()
    }

}
