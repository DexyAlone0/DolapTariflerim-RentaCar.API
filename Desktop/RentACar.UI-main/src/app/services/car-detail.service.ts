import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponse } from '../response/car-detail-response';
import { Observable } from 'rxjs';

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

  getItemsById(carId : number): Observable<CarDetailResponse> {
    return this.http.get<CarDetailResponse>(`${this.apiUrl}/carQuery/${carId}`);
  }
  getItemsAll(): Observable<CarDetailResponse[]> {
    return this.http.get<CarDetailResponse[]>(`${this.apiUrl}/carQuery`);
  }


}
