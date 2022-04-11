import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../entity/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {


  private static URL: string = 'http://localhost:8080/poudlard/api/compte';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(CompteService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${CompteService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${CompteService.URL}/${id}`);
  }

  public create(compte: Compte): Observable<any> {
    return this.http.post(CompteService.URL, this.compteToJson(compte));
  }

  public update(compte: Compte): Observable<any> {
    return this.http.put(`${CompteService.URL}/${compte.id}`, this.compteToJson(compte));
  }

  private compteToJson(compte: Compte): any {
    let obj = {
      id: compte.id,
      login: compte.login,
      nom: compte.nom,
      prenom: compte.prenom,
      naissance: compte.naissance,
      maison: compte.maison,
      solde: compte.solde,
    };
    return obj;
  }
}
