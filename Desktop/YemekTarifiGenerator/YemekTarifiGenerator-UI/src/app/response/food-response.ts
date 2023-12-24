export class FoodResponse {
  id: number;
  foodName : string;
  foodRecipe : string;
  materialNames : string;
  fileId : number;


  constructor([data]: any){
  this.id = data.id;
  this.foodName = data.foodName;
  this.materialNames = data.materialNames;
  this.foodRecipe = data.foodRecipe;
  this.fileId = data.fileId;
  }
  }
