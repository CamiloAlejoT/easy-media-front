import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'
import { LoginResponse } from '../core/interfaces/http.interface';
import { AUTH_RENEW } from '../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes(`${AUTH_RENEW}`)) {
      return next.handle(request);
    }
    else {
      const userToken = localStorage.getItem('userToken');
      const diffTime = (Number(new Date().getTime()) - Number(localStorage.getItem('startTokenTime')))

      if (userToken) {
        if (diffTime > 3500000) {
          const email = `${localStorage.getItem('email')}`
          this.authService.renewToken(email).then((data: LoginResponse | null) => {
            const clonedRequest = request.clone({
              setHeaders: {
                Authorization: `Bearer ${data?.access_token}`,
              },
            })
            return next.handle(clonedRequest);
          })
        }
        const clonedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        return next.handle(clonedRequest);
      } else {
        return next.handle(request);
      }

    }

  }

}
