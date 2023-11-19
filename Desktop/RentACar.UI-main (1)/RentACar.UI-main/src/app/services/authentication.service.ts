import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../entity/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:2300';
  public userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({ authToken: null, authenticateResult: null, accessTokenExpireDate: null });
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(new User(null,null,null));
  }
  public get userValue(): User {
    return this.userSubject.value;
  }
  logIn(name: string, password: string) : Observable<User> {
    return  this.http.get<User>(`${this.apiUrl}/LoginUser?name=${name}&password=${password}`).pipe(map(res => {
      const user: User = {
        authenticateResult : res.authenticateResult,
        authToken : res.authToken,
        accessTokenExpireDate : res.accessTokenExpireDate
      };
      this.userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }));
  }
  }
