import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/api/doctor.service';
import {CreateDoctorModel} from "../../../models/doctor/create-doctor-model";

@Component({
    selector: 'app-create-doctor',
    templateUrl: './create-doctor.component.html',
    styleUrls: ['./create-doctor.component.scss']
})
export class CreateDoctorComponent implements OnInit {
    formCreateDoctor!: FormGroup;

    @Input() doctorDialog!: boolean;
    @Output() doctorDialogChange = new EventEmitter<boolean>();

    constructor(
        private fb: FormBuilder,
        private doctorService: DoctorService
    ) { }

    ngOnInit(): void {
        this.formCreateDoctor = this.fb.group({
            name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            lastName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            email: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            address: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            phone: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
            codeSenecyt: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],


        });
    }

    hideDialog() {
        this.doctorDialog = false;
        this.doctorDialogChange.emit(this.doctorDialog);
    }

    saveDoctor() {
        console.log(this.formCreateDoctor.value);
        this.doctorService.save(this.formCreateDoctor.value).subscribe(
            (data) => {
                console.log(data);
                this.hideDialog();
            });
    }

}
