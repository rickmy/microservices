import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin!: FormGroup;

    constructor(
        private fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.formLogin = this.fb.group({
            userName: ['',[Validators.required, Validators.email]],
            password: ['',[Validators.required, Validators.minLength(6)]]
        });
    }

    login(){
        console.log(this.formLogin.value);
    }
}
