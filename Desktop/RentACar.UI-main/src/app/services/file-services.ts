import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) { }

  getFileById(fileId: number): Observable<Blob> {
    const url = `${this.apiUrl}/file/${fileId}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
