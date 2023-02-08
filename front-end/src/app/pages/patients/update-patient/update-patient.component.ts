import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../../services/api/patient.service";
import {PatientModel} from "../../../models/patient/patient-model";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {
    @Input() patientDialog: boolean = false;
    @Input() patient: PatientModel;
    @Output() patientDialogChange = new EventEmitter<boolean>();
    formPatient: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private patientService: PatientService
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(){
        this.formPatient = this.formBuilder.group({
            dni: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
            firstName:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            middleName:[null, [Validators.minLength(3), Validators.maxLength(50)]],
            firstSurname:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            secondSurname:[null, [Validators.minLength(3), Validators.maxLength(50)]],
            email:[null, [Validators.required, Validators.email]],
        });
        this.formPatient.patchValue({
            dni: this.patient.dni,
            firstName: this.patient.firstName,
            middleName: this.patient.middleName,
            firstSurname: this.patient.firstSurname,
            secondSurname: this.patient.secondSurname,
            email: this.patient.email,
        });
        console.log(this.patient)
    }

    get form(): { [key:string]: AbstractControl} {
        return this.formPatient.controls;
    }

    savePatient(){
        if(this.formPatient.invalid){
            return;
        }
        const patient = {
            ...this.patient,
            ...this.formPatient.value,
        }
        console.log(patient)
        this.patientService.putUpdatePatient(patient)
            .subscribe({
                next: (data: any) => {
                    console.log(data)
                    this.hideDialog();
                }
            });
    }

    hideDialog(){
        this.patientDialog = false;
        this.patientDialogChange.emit(this.patientDialog);
    }

}
