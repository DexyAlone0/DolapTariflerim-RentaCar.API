export class CreateCarRequest {
  id: number;
  brandId : string;
  fuelTypeId : string;
  gearTypeId: string;
  modelId : string;
  fileId : number;

  constructor(data: any){
  this.brandId = data.brandId;
  this.modelId = data.modelId;
  this.fuelTypeId = data.fuelTypeId;
  this.gearTypeId = data.gearTypeId;
  this.id = data.id;
  this.fileId = data.fileId;
  }
  }
