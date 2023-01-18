import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
            email: [''],
            password: ['']
        })
    }

    login(){
        console.log(this.formLogin.value);
    }
}
