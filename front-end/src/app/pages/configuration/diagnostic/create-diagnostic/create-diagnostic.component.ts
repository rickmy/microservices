import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { DiagnosticService } from 'src/app/services/api/diagnostic.service';

@Component({
  selector: 'app-create-diagnostic',
  templateUrl: './create-diagnostic.component.html',
  styleUrls: ['./create-diagnostic.component.scss']
})
export class CreateDiagnosticComponent implements OnInit {
  formCreateDiagnostic!: FormGroup;

  @Input() diagnosticDialog!: boolean;
  @Output() diagnosticDialogChange = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private diagnosticService: DiagnosticService
  ) { }

  ngOnInit(): void {
    this.formCreateDiagnostic = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]

    });
   
  }

  get form(): { [key:string]: AbstractControl} {
    return this.formCreateDiagnostic.controls;
}

  hideDialog() {
    this.diagnosticDialog = false;
    this.diagnosticDialogChange.emit(this.diagnosticDialog);
  }

  saveDiagnostic() {
    console.log(this.formCreateDiagnostic.value);
    this.diagnosticService.save(this.formCreateDiagnostic.value).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }

  

}
