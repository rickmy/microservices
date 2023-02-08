import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Treatment } from 'src/app/models/treatment/treatment.model';
import { TreatmentService } from 'src/app/services/api/treatment.service';

@Component({
  selector: 'app-edit-treatment',
  templateUrl: './edit-treatment.component.html',
  styleUrls: ['./edit-treatment.component.scss']
})
export class EditTreatmentComponent implements OnInit {
  formTreatment!: FormGroup;
  @Input() treatmentDialog!: boolean;
  @Input() treatment: Treatment;
  @Output() treatmentDialogChange = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private treatmentService: TreatmentService
  ) { }

  ngOnInit(): void {

    this.formTreatment = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]
    });
    this.formTreatment.patchValue({
      name: this.treatment.name,
      description: this.treatment.description
    });

  }
  hideDialog() {
    this.treatmentDialog = false;
    this.treatmentDialogChange.emit(this.treatmentDialog);
  }
  saveTreatment() {
    console.log(this.formTreatment.value);
    const treatment: Treatment = {
      id: this.treatment.id,
      name: this.formTreatment.value.name,
      description: this.formTreatment.value.description,
      status: this.treatment.status
    }
    this.treatmentService.updateTreatmentById(this.treatment.id , treatment).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }

}
