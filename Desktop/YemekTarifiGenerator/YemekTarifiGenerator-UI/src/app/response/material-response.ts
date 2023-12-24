

export class MaterialResponse {
  id: number;
  name : string;
  isChecked? : boolean;

  constructor([data]: any){
  this.id = data.id;
  this.isChecked = data.isChecked;
  this.name = data.name;
  }
  }
