// food.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodResponse } from '../response/food-response';

@Injectable({
  providedIn: 'root',
})
export class YemekService {
  private apiUrl = 'http://localhost:5215';

  constructor(private http: HttpClient) {}

  getMaterialsAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Material/getAllMaterial`);
  }
  createFood(foodName: string , foodRecipe : string): Observable<any> {
    const request = { foodName: foodName , foodRecipe : foodRecipe };
    return this.http.post(`${this.apiUrl}/api/Food/`, request);
  }


}
