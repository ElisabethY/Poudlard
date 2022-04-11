import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public authentication(login: string, password: string): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + btoa(login + ':' + password),
    });
    return this.http.get<string>(
      'http://localhost:8080/poudlard/api/connexion',
      { headers: httpHeaders, responseType: 'text' as 'json' }
    );
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('login') ? true : false;
  }


}
