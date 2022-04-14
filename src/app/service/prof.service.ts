import { Prof } from './../entity/prof';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfService {
  private static URL: string = 'http://localhost:8080/poudlard/api/prof';
  private static CREATE: string = 'http://localhost:8080/poudlard/api/prof/add';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(ProfService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${ProfService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${ProfService.URL}/${id}`);
  }

  public create(prof: Prof): Observable<any> {
    console.log(prof)
    return this.http.post(ProfService.CREATE, this.profToJson(prof));
  }

  public update(prof: Prof): Observable<any> {
    return this.http.put(
      `${ProfService.URL}/${localStorage.getItem('id')}`,

      this.profToJson(prof)
    );
  }

  private profToJson(prof: Prof): any {
    let obj = {
      id: prof.id,
      login: prof.login,
      nom: prof.nom,
      prenom: prof.prenom,
      naissance: prof.naissance,
      maison: { id: prof.maison?.id },
      password: prof.password,
      solde: prof.solde,
      type: 'prof',
    };
    return obj;
  }
}
