import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'
import { LoginPost, LoginResponse, signinResponse, SigninPost } from 'src/app/core/interfaces/http.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false

  constructor(
    private httpService: HttpService
  ) { }

  checkAuth(): boolean {
    const userToken = localStorage.getItem('userToken')
    const startTokenTime = localStorage.getItem('startTokenTime')
    if (userToken) {
      this.isAuthenticated = true
      return this.isAuthenticated
    } else {
      return this.isAuthenticated
    }
  }

  async login(postData: LoginPost): Promise<boolean> {
    try {
      const response: LoginResponse = await this.httpService.login(postData)
      localStorage.setItem('userToken', response.access_token)
      localStorage.setItem('startTokenTime', `${new Date().getTime()}`)
      this.isAuthenticated = true;
      return this.isAuthenticated
    } catch (err) {
      return this.isAuthenticated
    }
  }

  async signin(postData: SigninPost): Promise<boolean> {
    try {
      await this.httpService.sigin(postData)
      return true
    } catch (err) {
      return false
    }
  }
}
