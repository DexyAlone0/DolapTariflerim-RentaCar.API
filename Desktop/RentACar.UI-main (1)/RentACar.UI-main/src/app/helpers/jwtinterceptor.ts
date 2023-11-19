import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private apiUrl = 'http://localhost:2300';
  constructor(private authenticationService: AuthenticationService) {

  } intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.authenticationService.userValue;
    const isLoggedIn = user && user.authToken;
    const isApiUrl = request.url.startsWith(this.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${user.authToken}`
        }
      })
    }
    return next.handle(request);
  }

}
