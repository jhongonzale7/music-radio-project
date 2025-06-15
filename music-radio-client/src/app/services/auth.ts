import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:5234/auth';

  constructor(private http: HttpClient) {}

register(user: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/register`, user, { responseType: 'text' });
}

login(credentials: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, credentials);
}

/**
 * Devuelve el usuario logueado (o 401).
 */
me(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/me`);
}

/**
 * Cierra la sesión en el servidor.
 */
logout(): Observable<any> {
  return this.http.post(`${this.apiUrl}/logout`, {});
}

}
