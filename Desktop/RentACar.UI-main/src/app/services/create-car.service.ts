import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponse } from '../response/car-detail-response';
import { Observable } from 'rxjs';
import { ModelResponse } from '../response/model-response';
import { CreateCarRequest } from '../request/create-car.request';

@Injectable({
  providedIn: 'root'
})
export class CreateCarService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


