import { Eleve } from './../entity/eleve';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EleveService {
  private static URL: string = 'http://localhost:8080/poudlard/api/eleve';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(EleveService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EleveService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${EleveService.URL}/${id}`);
  }

  public getbyCours(id: number): Observable<any> {
    return this.http.get<Eleve>(`${EleveService.URL}/listeparcours/${id}`);
  }

  public create(eleve: Eleve): Observable<any> {
    return this.http.post(EleveService.URL, this.EleveToJson(eleve));
  }

  public update(eleve: Eleve): Observable<any> {
    return this.http.put(
      `${EleveService.URL}/${eleve.id}`,
      this.EleveToJson(eleve)
    );
  }

  private EleveToJson(eleve: Eleve): any {
    let obj = {
      id: eleve.id,
      login: eleve.login,
      nom: eleve.nom,
      prenom: eleve.prenom,
      naissance: eleve.naissance,
      maison: eleve.maison,
      password: eleve.password,
      solde: eleve.solde,
      type: eleve.type,
    };
    return obj;
  }
}
