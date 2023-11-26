import { Component } from '@angular/core';
import { UserLoginRequest } from '../request/user-login-request';
import { UserService } from "../services/user-service";
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../entity/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserLoginRequest = {
    name: "",
    password: "",

  };

  constructor(private dataService: AuthenticationService , private toastr: ToastrService) {}

  submitForm() {
    this.dataService.logIn(this.user.name , this.user.password).subscribe();
}
showSuccess() {
  this.toastr.success('Giriş başarılı!');
}
showError() {
  this.toastr.error('Kullanıcı Adı veya Şifre yanlış');
}
}
