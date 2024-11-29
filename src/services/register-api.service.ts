import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root',
})
export class RegisterApiService {
  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.apiUrl}/registers`);
  }

  getRegistration(id: number): Observable<Registration> {
    return this.http.get<Registration>(`${this.apiUrl}/register/${id}`);
  }

  addRegistration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(
      `${this.apiUrl}/register`,
      registration
    );
  }

  updateRegistration(registration: Registration): Observable<Registration> {
    return this.http.put<Registration>(
      `${this.apiUrl}/register/${registration.id}`,
      registration
    );
  }

  deleteRegistration(id: number): Observable<Registration> {
    return this.http.delete<Registration>(`${this.apiUrl}/register/${id}`);
  }
}
