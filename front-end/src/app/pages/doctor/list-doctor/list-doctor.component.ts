import { Component, OnInit } from '@angular/core';
import { CreateDoctorModel } from 'src/app/models/doctor/create-doctor-model';
import { DoctorService } from 'src/app/services/api/doctor.service';

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {
    doctorDialog: boolean = false;
    constructor(
        private doctorService: DoctorService
    ) { }

    doctors: CreateDoctorModel[] = [];
    selectedDoctor: CreateDoctorModel[] = [];

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


}
