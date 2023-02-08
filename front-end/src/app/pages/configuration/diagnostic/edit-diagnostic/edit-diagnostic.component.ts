import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDiagnosticModel } from 'src/app/models/diagnostic/create-diagnostic-model';
import { Diagnostic } from 'src/app/models/diagnostic/diagnostic.model';
import { DiagnosticService } from 'src/app/services/api/diagnostic.service';

@Component({
  selector: 'app-edit-diagnostic',
  templateUrl: './edit-diagnostic.component.html',
  styleUrls: ['./edit-diagnostic.component.scss']
})
export class EditDiagnosticComponent implements OnInit {
  formDiagnostic!: FormGroup;

  @Input() diagnosticDialog!: boolean;
  @Input() diagnostic: Diagnostic;
  @Output() diagnosticDialogChange = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private diagnosticService: DiagnosticService
  ) { }

  ngOnInit(): void {
    this.formDiagnostic = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]

    });
    this.formDiagnostic.patchValue({
      name: this.diagnostic.name,
      description: this.diagnostic.description
    });
  }

  hideDialog() {
    this.diagnosticDialog = false;
    this.diagnosticDialogChange.emit(this.diagnosticDialog);
  }

  saveDiagnostic() {
    console.log(this.formDiagnostic.value);
    const diagnostic : Diagnostic = {
      id: this.diagnostic.id,
      name: this.formDiagnostic.value.name,
      description: this.formDiagnostic.value.description,
      status: this.diagnostic.status
    }
    this.diagnosticService.updateDiagnosticById(this.diagnostic.id , diagnostic).subscribe(
      (data) => {
        console.log(data);
        this.hideDialog();
      });
  }

  

}
