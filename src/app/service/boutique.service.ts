import { Observable } from 'rxjs';
import { Boutique } from './../entity/boutique';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoutiqueService {
  private static URL: string = 'http://localhost:8080/poudlard/api/boutiques';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(BoutiqueService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${BoutiqueService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${BoutiqueService.URL}/${id}`);
  }

  public create(boutique: Boutique): Observable<any> {
    console.log(boutique);
    return this.http.post(BoutiqueService.URL, this.boutiqueToJson(boutique));
  }

  public update(boutique: Boutique): Observable<any> {
    return this.http.put(
      `${BoutiqueService.URL}/${boutique.id}`,
      this.boutiqueToJson(boutique)
    );
  }

  private boutiqueToJson(boutique: Boutique): any {
    let obj = {
      id: boutique.id,
      nom: boutique.nom,
      adresse: boutique.adresse,
      categorie: boutique.categorie,
    };
    return obj;
  }
}
