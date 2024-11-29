import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authen } from '../models/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(req: Authen): Observable<boolean> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<any>(url, req).pipe(
      map((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          return true;
        }
        return false;
      }),
      catchError((err) => {
        console.error(err);
        return [false];
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
