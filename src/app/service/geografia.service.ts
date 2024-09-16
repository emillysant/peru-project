import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeografiaService {
  private apiUrl = 'http://localhost:3000/geography';
  constructor(private http: HttpClient) {}

  getGeografia(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }
}
