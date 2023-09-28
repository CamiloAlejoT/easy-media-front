import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPost, LoginResponse, RenewPost, SigninPost, signinResponse } from 'src/app/core/interfaces/http.interface';
import { BASEURL, AUTH_BASE, AUTH_LOGIN, AUTH_SIGNIN, AUTH_LOGOUT, AUTH_RENEW } from 'src/app/core/constants/constants';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }


  async login(data: LoginPost): Promise<LoginResponse> {
    const url = `${BASEURL}/${AUTH_BASE}/${AUTH_LOGIN}`
    return await firstValueFrom(this.http.post<LoginResponse>(url, data))
  }

  async sigin(data: SigninPost): Promise<signinResponse> {
    const url = `${BASEURL}/${AUTH_BASE}/${AUTH_SIGNIN}`
    return await firstValueFrom(this.http.post<signinResponse>(url, data))
  }

  async renewToken(data: RenewPost): Promise<LoginResponse> {
    const url = `${BASEURL}/${AUTH_BASE}/${AUTH_RENEW}`
    return await firstValueFrom(this.http.post<LoginResponse>(url, data))
  }


}
