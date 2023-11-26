
export class UserLoginRequest {
  name : string;
  password : string;

  constructor(data: any){
  this.name = data.name;
  this.password = data.password;

  }
  }
