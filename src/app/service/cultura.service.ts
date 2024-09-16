import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CulturaService {
  private apiUrl = 'http://localhost:3000/culture';
  constructor(private http: HttpClient) {}

  getCultura(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCultura(cultura: any): Observable<any> {
    return this.http.post(this.apiUrl, cultura); // Cria nova cultura
  }

  updateCultura(cultura: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cultura.id}`, cultura);
  }

  deletarCultura(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
