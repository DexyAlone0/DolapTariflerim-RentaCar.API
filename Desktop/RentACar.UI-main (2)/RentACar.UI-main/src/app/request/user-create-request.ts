
export class UserCreateRequest {
  name : string;
  password : string;
  fullName: string;
  email : string;

  constructor(data: any){
  this.name = data.name;
  this.password = data.password;
  this.fullName = data.fullName;
  this.email = data.email;
  }
  }
