import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/api/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm() {
        this.formLogin = this.fb.group({
            userName: ['',[Validators.required]],
            password: ['',[Validators.required, Validators.minLength(3)]]
        });
    }

    login(){
        console.log(this.formLogin.value);
        const {userName, password} = this.formLogin.value;
        this.authService.postLogin(userName,password)
            .subscribe({
                next: (res)=>{
                    console.log(res);
                },
                error: (err)=>{
                    console.log(err);
                }
            });
    }
}
