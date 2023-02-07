import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/api/patient.service";
import {PatientModel} from "../../../models/patient/patient-model";

@Component({
    selector: 'app-list-patient',
    templateUrl: './list-patient.component.html',
    styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
    patients: PatientModel[] = [];
    loading = false;
    dPatientCreate = false;
    constructor(
        private patientService: PatientService
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

}
