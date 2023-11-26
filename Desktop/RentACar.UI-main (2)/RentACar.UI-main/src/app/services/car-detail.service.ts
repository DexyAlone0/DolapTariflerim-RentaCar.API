import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponse } from '../response/car-detail-response';
import { Observable } from 'rxjs';
import { BrandResponse } from '../response/brand-response';
import { UpdateCarRequest } from '../request/update-car.request';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient)
  {

  }

  getItems(): Observable<CarDetailResponse> {
    return this.http.get<CarDetailResponse>(`${this.apiUrl}/carQuery/21`);
  }
  updateCar(updateCarRequest : UpdateCarRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateCar` , updateCarRequest);
  }

  getItemsById(carId : number): Observable<CarDetailResponse> {
    return this.http.get<CarDetailResponse>(`${this.apiUrl}/carQuery/${carId}`);
  }
  getItemsAll(): Observable<CarDetailResponse[]> {
    return this.http.get<CarDetailResponse[]>(`${this.apiUrl}/carQuery`);
  }
  getItemsAllByCount(): Observable<CarDetailResponse[]> {
    return this.http.get<CarDetailResponse[]>(`${this.apiUrl}/carCount`);
  }



}
