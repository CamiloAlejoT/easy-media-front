import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AUTH } from 'src/app/core/enum/auth.enum'
import { AuthService } from 'src/app/services/auth.service';
import { LoginPost } from 'src/app/core/interfaces/http.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authEnum = AUTH
  loginForm: FormGroup;
  loginError: boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  navigateSignin() {
    this.router.navigate(['auth/signin'])
  }

  navigateHome() {
    this.router.navigate(['publications'])
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      if (await this.authService.login(this.loginForm.value as LoginPost))
        this.navigateHome()
      else
        this.loginError = false
    }
  }

}
