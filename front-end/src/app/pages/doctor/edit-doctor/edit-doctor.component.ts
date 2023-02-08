import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { EditDoctorModel } from 'src/app/models/doctor/edit-doctor-model';
import { DoctorService } from 'src/app/services/api/doctor.service';
import {ListDoctorModel} from "../../../models/doctor/list-doctor-model";

@Component({
    selector: 'app-edit-doctor',
    templateUrl: './edit-doctor.component.html',
    styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
    formEditDoctor!: FormGroup;

    @Input() doctorDialog!: boolean;
    @Input() listDoctorModel: ListDoctorModel;
    @Output() doctorDialogChange = new EventEmitter<boolean>();

    constructor(
        private fb: FormBuilder,
        private doctorService: DoctorService
    ) { }

    ngOnInit(): void {
        this.formEditDoctor = this.fb.group({
            name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
            address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
        });
        this.findDoctorById(this.listDoctorModel.id)
    }

    get form(): { [key:string]: AbstractControl} {
        return this.formEditDoctor.controls;
    }
    findDoctorById(id: number){
        this.doctorService.findDoctorById(id).subscribe({
        next: (res) =>{
            this.formEditDoctor.patchValue({
                name: res.name,
                lastName: res.lastName,
                address: res.address
            });
        }
        })
    }
    hideDialog() {
        this.doctorDialog = false;
        this.doctorDialogChange.emit(this.doctorDialog);
    }

    saveDoctor() {
        console.log(this.formEditDoctor.value);
        const editDoctorModel : EditDoctorModel={
            name: this.formEditDoctor.value.name,
            lastName: this.formEditDoctor.value.lastName,
            address:this.formEditDoctor.value.address

        }
        this.doctorService.updateDoctorById(this.listDoctorModel.id , editDoctorModel).subscribe(
           (data) => {
                console.log(data);
                this.hideDialog();
            });
    }



}

