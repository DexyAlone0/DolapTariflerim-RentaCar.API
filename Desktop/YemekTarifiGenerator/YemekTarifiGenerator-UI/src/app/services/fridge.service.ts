// material.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FridgeResponse } from '../response/fridge-response';

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private apiUrl = 'http://localhost:5215';

  constructor(private http: HttpClient) {}

  // Tüm malzemeleri getiren metod
  getProductsAll(): Observable<FridgeResponse[]> {
    return this.http.get<FridgeResponse[]>(`${this.apiUrl}/api/Fridge/getAllFridgeProduct`);
  }
  createProduct(product: string): Observable<any> {
    const request = { product: product };
    return this.http.post(`${this.apiUrl}/api/Fridge/createProduct/`, request);
  }

  deleteProduct(productId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/api/Fridge/deleteProduct/${productId}`;
    return this.http.delete<void>(deleteUrl);
  }


}
