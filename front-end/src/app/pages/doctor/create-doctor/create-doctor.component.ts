import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
            dni: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
            name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            lastName: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
            email: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
            codeSenecyt: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(6)]],


        });
    }

    get form(): { [key:string]: AbstractControl} {
        return this.formCreateDoctor.controls;
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
