import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SymptomService } from 'src/app/services/api/symptom.service';

@Component({
  selector: 'app-create-symptom',
  templateUrl: './create-symptom.component.html',
  styleUrls: ['./create-symptom.component.scss']
})
export class CreateSymptomComponent implements OnInit {
  formCreateSymptom!: FormGroup;

  @Input() symptomDialog!: boolean;
  @Output() symptomDialogChange = new EventEmitter<boolean>();
  

  constructor(
    private fb: FormBuilder,
    private symptomService: SymptomService
  ) { }

  ngOnInit(): void {

    this.formCreateSymptom = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      status: [true]

    });
  }

  hideDialog() {
    this.symptomDialog = false;
    this.symptomDialogChange.emit(this.symptomDialog);
  }

  saveSymptom() {
    console.log(this.formCreateSymptom.value);
    this.symptomService.save(this.formCreateSymptom.value).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }
}
