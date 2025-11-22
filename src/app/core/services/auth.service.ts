import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { AuthResponseDTO, LoginRequestDTO, PerfilResponseDTO, RegisterRequestDTO, RoleType } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private storage = inject(StorageService);
  private router = inject(Router);
  private apiUrl = `${environment.apiUrl}/auth`;

// Signals para ESTADO COMPARTIDO
  private _currentUser = signal<PerfilResponseDTO | null>(null);
  private _isAuthenticated = signal<boolean>(false);
  private _token = signal<string | null>(null);

  currentUser = this._currentUser.asReadonly();
  isAuthenticated = this._isAuthenticated.asReadonly();
  token = this._token.asReadonly();

  constructor() {
    this.loadAuthData();
  }

    // POST - Login
  login(credentials: LoginRequestDTO): Observable<AuthResponseDTO> {
    return this.http.post<AuthResponseDTO>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        this.saveAuthData(response);
      })
    );
  }

    // POST - Register
  register(data: RegisterRequestDTO): Observable<AuthResponseDTO> {
    return this.http.post<AuthResponseDTO>(`${this.apiUrl}/register`, data).pipe(
      tap(response => {
        this.saveAuthData(response);
      })
    );
  }

  // Logout
  logout(): void {
    this.storage.removeItem('token');
    this.storage.removeItem('user');
    this._currentUser.set(null);
    this._isAuthenticated.set(false);
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  // Helpers privados
  private saveAuthData(response: AuthResponseDTO): void {
    this.storage.setItem('token', response.token);
    this._token.set(response.token);

    // AuthResponse incluye role si viene del backend
    const user: PerfilResponseDTO = {
      id: '', // No disponible desde AuthResponse
      email: response.email,
      names: response.name,  // No disponible desde AuthResponse
      role: response.role || RoleType.ROLE_USER,
      bloqueado: false // No disponible desde AuthResponse
    };

    this.storage.setItem('user', user);
    this._currentUser.set(user);
    this._isAuthenticated.set(true);
  }

  private loadAuthData(): void {
    const token = this.storage.getItem<string>('token');
    const user = this.storage.getItem<PerfilResponseDTO>('user');

    if (token && user) {
      this._token.set(token);
      this._currentUser.set(user);
      this._isAuthenticated.set(true);
    }
  }

  // Getters para guards
  isAdmin(): boolean {
    return this._currentUser()?.role === RoleType.ROLE_ADMIN;
  }

  getToken(): string | null {
    return this._token();
  }

  get currentUserValue(): PerfilResponseDTO | null {
    return this._currentUser();
  }

}
