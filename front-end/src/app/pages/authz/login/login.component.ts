import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/api/auth.service";
import {SecurityService} from "../../../services/security.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin!: FormGroup;
    loading = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private securityService: SecurityService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
        if (this.securityService.getAccessToken()) {
            this.router.navigate(['/']);
        }
    }

    buildForm() {
        this.formLogin = this.fb.group({
            userName: ['',[Validators.required]],
            password: ['',[Validators.required, Validators.minLength(3)]]
        });
    }

    login(){
        console.log(this.formLogin.value);
        this.loading = true;
        const {userName, password} = this.formLogin.value;
        this.authService.postLogin(userName,password)
            .subscribe({
                next: (res)=>{
                    this.loading = false;
                    console.log(res);
                },
                error: (err)=>{
                    this.loading = false;
                    console.log(err);
                }
            });
    }
}
