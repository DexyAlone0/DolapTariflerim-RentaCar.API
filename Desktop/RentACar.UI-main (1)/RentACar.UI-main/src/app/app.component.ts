import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _auth: AuthenticationService){
    let user = localStorage.getItem('user');
    if (typeof user !== 'undefined' && user !== null && _auth.userValue == null) {
      _auth.userSubject.next(JSON.parse(user));
    }
  }
  title = 'BerkayRentaCarUI';
  ngOnInit(): void {

  }

}
