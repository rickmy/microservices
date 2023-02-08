import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Symptom } from 'src/app/models/symptom/symptom.model';
import { SymptomService } from 'src/app/services/api/symptom.service';

@Component({
  selector: 'app-edit-symptom',
  templateUrl: './edit-symptom.component.html',
  styleUrls: ['./edit-symptom.component.scss']
})
export class EditSymptomComponent implements OnInit {
  formSymptom!: FormGroup;
 

  @Input() symptomDialog!: boolean;
  @Input() symptom: Symptom;
  @Output() symptomDialogChange = new EventEmitter<boolean>();
  
  

  constructor(
    private fb: FormBuilder,
    private symptomService: SymptomService
  ) { }

  ngOnInit(): void {

    this.formSymptom = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]
      

    });
    this.formSymptom.patchValue({
      name: this.symptom.name,
      description: this.symptom.description
    });
  }

  get form(): { [key:string]: AbstractControl} {
    return this.formSymptom.controls;
}
  hideDialog() {
    this.symptomDialog = false;
    this.symptomDialogChange.emit(this.symptomDialog);
  }

  saveSymptom() {
    console.log(this.formSymptom.value);
    const symptom: Symptom = {
      id: this.symptom.id,
      name: this.formSymptom.value.name,
      description: this.formSymptom.value.description,
      status: this.symptom.status
    }
    this.symptomService.updateSymptomById(this.symptom.id , symptom).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }
}
