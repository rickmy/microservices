import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreatePatientModel} from "../../../models/patient/create-patient-model";

@Component({
    selector: 'app-create-patient',
    templateUrl: './create-patient.component.html',
    styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {
    @Input() patientDialog: boolean = false;
    formPatient: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(){
        this.formPatient = this.formBuilder.group({
            dni: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
            firstName:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            middleName:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            firstSurname:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            secondSurname:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            email:[null, [Validators.required, Validators.email]],
        });
    }

    get form(): { [key:string]: AbstractControl} {
        return this.formPatient.controls;
    }

    savePatient(){
        if(this.formPatient.invalid){
            return;
        }
        const patient : CreatePatientModel = this.formPatient.value;
        console.log(this.formPatient.value);
    }

    hideDialog(){

    }

}
