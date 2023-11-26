
export class CarDetailResponse {
id: number;
carId : number;
modelId : number;
year : number;
hesAirConditioning : boolean;
brandName : string;
fuelTypeName : string;
gearTypeName: string;
engineCapacityName : string;
modelName : string;
createdDate : Date;
count : number;
fileId : number;

constructor(data: any){
this.carId = data.carId | data.Id;
this.hesAirConditioning = data.hesAirConditioning;
this.modelId = data.modelId;
this.year = data.year;
this.count = data.count;
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
