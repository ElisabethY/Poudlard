import { Eleve } from './../entity/eleve';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EleveService {
  private static URL: string = 'http://localhost:8080/poudlard/api/eleve';
  private static PUT: string = 'http://localhost:8080/poudlard/api/eleve/put';
  private static GET: string = 'http://localhost:8080/poudlard/api/cours/get';
  private static CREATE: string =
    'http://localhost:8080/poudlard/api/eleve/creer';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(EleveService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EleveService.URL}/${id}`);
  }
  public getEleveForUpdate(id: number): Observable<any> {
    return this.http.get<any>(`${EleveService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${EleveService.GET}/${id}`);
  }

  public getbyCours(id: number): Observable<any> {
    return this.http.get<Eleve>(`${EleveService.URL}/listeparcours/${id}`);
  }

  public create(eleve: Eleve): Observable<any> {
    //eleve.password = CryptoJS.MD5(eleve.password).toString();
    return this.http.post(EleveService.CREATE, this.EleveToJson(eleve));
  }

  public updateEleveIfAdmin(eleve: Eleve): Observable<any> {
    return this.http.put(
      `${EleveService.PUT}/${eleve.id}`,
      this.EleveToJson(eleve)
    );
  }
  public update(eleve: Eleve): Observable<any> {
    return this.http.put(
      `${EleveService.PUT}/${localStorage.getItem('id')}`,
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
      password: eleve.password,
      solde: eleve.solde,
      type: 'eleve',
      maison: {
        id: eleve.maison?.id,
        nom: eleve.maison?.nom,
        score: eleve.maison?.score,
      },
    };
    return obj;
  }
}
