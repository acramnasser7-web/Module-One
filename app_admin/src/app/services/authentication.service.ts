import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  public saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  public deleteToken(): void {
    localStorage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > Date.now() / 1000;
  }

  public login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/login`, { email, password });
  }

  public register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/register`, { email, password });
  }

  public logout(): void {
    this.deleteToken();
  }
}
