import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreatmentService } from 'src/app/services/api/treatment.service';

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.scss']
})
export class CreateTreatmentComponent implements OnInit {

  formCreateTreatment!: FormGroup;
  @Input() treatmentDialog!: boolean;
  @Output() treatmentDialogChange = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private treatmentService: TreatmentService
  ) { }

  ngOnInit(): void {

    this.formCreateTreatment = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      status: [true]

    });
  }
  get form(): { [key:string]: AbstractControl} {
    return this.formCreateTreatment.controls;
}
  hideDialog() {
    this.treatmentDialog = false;
    this.treatmentDialogChange.emit(this.treatmentDialog);
  }

  saveTreatment() {
    console.log(this.formCreateTreatment.value);
    this.treatmentService.save(this.formCreateTreatment.value).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }

}
