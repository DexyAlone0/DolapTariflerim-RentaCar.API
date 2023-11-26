import { UserLoginRequest } from './../request/user-login-request';
import { UserCreateRequest } from '../request/user-create-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) { }

  postData(userCreateRequest : UserCreateRequest ): Observable<any> {
     return this.http.post(`${this.apiUrl}/CreateUser`,userCreateRequest);
  }
  loginUser(userLoginRequest : UserLoginRequest): Observable<any> {
   return this.http.get<any>(`${this.apiUrl}/LoginUser?name=${userLoginRequest.name}&password=${userLoginRequest.password}`);
  }

}
