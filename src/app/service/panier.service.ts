import { HttpClient } from '@angular/common/http';
import { Panier } from 'src/app/entity/panier';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private static URL: string = 'http://localhost:8080/poudlard/api/panier';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(PanierService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${PanierService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${PanierService.URL}/${id}`);
  }

  public create(panier: Panier): Observable<any> {
    return this.http.post(PanierService.URL, this.panierToJson(panier));
  }

  public update(panier: Panier): Observable<any> {
    return this.http.put(`${PanierService.URL}/${panier.id}`, this.panierToJson(panier));
  }

  private panierToJson(panier: Panier): any {
    let obj = {
      id: panier.id,
      achat: panier.achat,
      dateAchat :panier.dateAchat,
      compte: panier.compte,
      produit: panier.produit


    };
    return obj;
  }
}
