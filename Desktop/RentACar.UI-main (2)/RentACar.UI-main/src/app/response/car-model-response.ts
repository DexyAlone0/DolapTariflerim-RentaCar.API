
export class CarModelResponse {
  id: number;
  brandName : string;
  fuelTypeName : string;
  gearTypeName: string;
  name : string;
  fileId : number;

  constructor(data: any){
  this.id = data.id;
  this.brandName = data.brandName;
  this.name = data.name;
  this.fuelTypeName = data.fuelTypeName;
  this.gearTypeName = data.gearTypeName;
  this.fileId = data.fileId;
  }
  }
