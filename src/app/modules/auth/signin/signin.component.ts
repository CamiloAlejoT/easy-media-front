import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { AUTH } from 'src/app/core/enum/auth.enum'
import { passwordMatchValidator } from 'src/app/utilities/password.validator';
import { SigninPost } from 'src/app/core/interfaces/http.interface';
import { AuthService } from 'src/app/services/auth.service';


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
    private authService: AuthService

  ) {
    this.signinForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: passwordMatchValidator } as FormControlOptions
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
      if (await this.authService.signin(postData))
        this.navigateLogin()
      else
        console.log("error");
    }
  }

}
