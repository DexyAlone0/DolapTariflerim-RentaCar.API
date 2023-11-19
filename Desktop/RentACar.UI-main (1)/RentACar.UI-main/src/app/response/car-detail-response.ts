
export class CarDetailResponse {
id: number;
carId : number;
brandName : string;
fuelTypeName : string;
gearTypeName: string;
engineCapacityName : string;
modelName : string;
createdDate : Date;
fileId : number;

constructor(data: any){
this.carId = data.carId | data.Id;
this.brandName = data.brandName;
this.modelName = data.modelName;
this.fuelTypeName = data.fuelTypeName;
this.gearTypeName = data.gearTypeName;
this.engineCapacityName = data.engineCapacityName;
this.createdDate = new Date(data.apiDateTime);
this.id = data.id;
this.fileId = data.fileId;
}
}
