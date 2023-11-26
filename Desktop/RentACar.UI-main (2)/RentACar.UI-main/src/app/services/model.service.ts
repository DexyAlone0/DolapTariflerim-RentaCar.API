import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModelResponse } from '../response/car-model-response';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) { }


  getModel(modelId: number): Observable<CarModelResponse> {
    return this.http.get<CarModelResponse>(`${this.apiUrl}/getModel/${modelId}`);
  }

}


