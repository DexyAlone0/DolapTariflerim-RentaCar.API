export class FridgeResponse {
  id : number;
  products : string;

  constructor([data] : any){
   this.products = data.product;
   this.id = data.id;
  }
  }
