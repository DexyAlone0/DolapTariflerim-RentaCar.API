import { CreateCarRequest } from './../request/create-car.request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponse } from '../response/car-detail-response';
import { Observable } from 'rxjs';
import { ModelResponse } from '../response/model-response';
import { BrandResponse } from '../response/brand-response';


@Injectable({
  providedIn: 'root'
})
export class CreateCarService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) {}


  getAllBrand() : Observable<BrandResponse[]>{
    return this.http.get<BrandResponse[]>(`${this.apiUrl}/all`);
  }
  getAllModel() : Observable<ModelResponse[]>{
    return this.http.get<ModelResponse[]>(`${this.apiUrl}/allModel`);
  }
  getModelByBrandId(brandId : number) : Observable<ModelResponse[]>{
    return this.http.get<ModelResponse[]>(`${this.apiUrl}/model/${brandId}`);
  }
  carCreate(createCarRequest : CreateCarRequest): Observable<any>{
    const formData = new FormData();
     formData.append('file', createCarRequest.file);
     formData.append('name', createCarRequest.name);
     formData.append('caseTypeId', createCarRequest.caseTypeId.toString());
     formData.append('brandId', createCarRequest.brandId.toString());
     formData.append('gearTypeId', createCarRequest.gearTypeId.toString());
     formData.append('countOfSeats', createCarRequest.countOfSeats.toString());
     formData.append('fuelTypeId', createCarRequest.fuelTypeId.toString());
    return this.http.post(`${this.apiUrl}/model`,formData);
  }
}


