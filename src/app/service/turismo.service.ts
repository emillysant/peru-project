import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TurismoService {
  private apiUrl = 'http://localhost:3000/tourism';
  constructor(private http: HttpClient) {}

  getTurismo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
