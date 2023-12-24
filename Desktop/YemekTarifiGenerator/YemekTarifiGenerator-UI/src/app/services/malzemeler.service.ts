// material.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaterialResponse } from '../response/material-response';

@Injectable({
  providedIn: 'root',
})
export class MalzemeService {
  private apiUrl = 'http://localhost:5215';

  constructor(private http: HttpClient) {}

  // Tüm malzemeleri getiren metod
  getMaterialsAll(): Observable<MaterialResponse[]> {
    return this.http.get<MaterialResponse[]>(`${this.apiUrl}/api/Material/getAllMaterial`);
  }
  createMaterial(materialName: string ): Observable<any> {
    const request = { materialName: materialName};
    return this.http.post(`${this.apiUrl}/api/Material/createMaterial/`, request);
  }

  // Seçilen malzemelere göre yiyecekleri getiren metod
  postYiyeceklerByMaterials(selectedMaterials: string[]): Observable<MaterialResponse[]> {
    // Post isteği gönder
    return this.http.post<MaterialResponse[]>(`${this.apiUrl}/api/FoodMaterial/by-materials`, selectedMaterials);
  }
}
