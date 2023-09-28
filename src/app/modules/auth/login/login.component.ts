import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { LoginPost, LoginResponse } from 'src/app/core/interfaces/http.interface';
import { AUTH } from 'src/app/core/enum/auth.enum'

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
    private httpService: HttpService
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
      const postData: LoginPost = this.loginForm.value as LoginPost;
      try {
        const response: LoginResponse = await this.httpService.login(postData)
        localStorage.setItem('userToken', response.access_token);
        localStorage.setItem('startTokenTime', `${new Date().getTime()}`);

      } catch (err) {
        this.loginError = !this.loginError

      }

    }
  }

}
