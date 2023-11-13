import { Component } from '@angular/core';
import { UserService } from "../services/user-service";
import { UserCreateRequest } from "../request/user-create-request";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: UserCreateRequest = {
    name: "",
    password: "",
    fullName: "",
    email: ""
  };

  constructor(private dataService: UserService , private toastr: ToastrService) {}

  submitForm() {
    this.dataService.postData(this.user).subscribe({
      next: () => {
        // next
        console.log('başarılı');
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
        this.showError()
      },
      complete: () => {
        this.showSuccess()
      }
    });
}
showSuccess() {
  this.toastr.success('Başarı ile kayıt oldunuz !');
}
showError() {
  this.toastr.error('Hatalı giriş !');
}

}
