import { Component } from '@angular/core';
import { UserLoginRequest } from '../request/user-login-request';
import { UserService } from "../services/user-service";
import { ToastrService } from 'ngx-toastr';
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

  constructor(private dataService: UserService , private toastr: ToastrService) {}

  submitForm() {
    this.dataService.loginUser(this.user).subscribe({
      next: (data : any) => {
        // next
        if(data == true){
          this.showSuccess();

        }
        else {
          this.showError();
        }
        console.log('başarılı');
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
        this.showError();
      },
      complete: () => {

      }
    });
}
showSuccess() {
  this.toastr.success('Giriş başarılı!');
}
showError() {
  this.toastr.error('Kullanıcı Adı veya Şifre yanlış');
}
}
