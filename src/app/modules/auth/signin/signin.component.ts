import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AUTH } from 'src/app/core/enum/auth.enum'
import { passwordMatchValidator } from 'src/app/utilities/password.validator';
import { SigninPost } from 'src/app/core/interfaces/http.interface';
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  authEnum = AUTH
  signinForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {
    this.signinForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: passwordMatchValidator }
    )
  }

  navigateLogin() {
    this.router.navigate(['auth/login'])
  }

  async onSubmit() {
    if (this.signinForm.valid) {
      const postData: SigninPost = {
        email: this.signinForm.get('email')?.value,
        name: this.signinForm.get('name')?.value,
        password: this.signinForm.get('password')?.value,
      }
      try {
        await this.httpService.sigin(postData)
        this.navigateLogin()
      } catch (err) {
        console.log('error');
      }
    }
  }

}
