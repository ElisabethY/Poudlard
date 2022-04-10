import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './../entity/produit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private static URL: string = 'http://localhost:8080/poudlard/api/catalogue/boutique';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(ProduitService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${ProduitService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${ProduitService.URL}/${id}`);
  }

  public create(produit: Produit): Observable<any> {
    return this.http.post(ProduitService.URL, this.produitToJson(produit));
  }

  public update(produit: Produit): Observable<any> {
    return this.http.put(`${ProduitService.URL}/${produit.id}`, this.produitToJson(produit));
  }

  private produitToJson(produit: Produit): any {
    let obj = {
      id: produit.id,
      libelle: produit.libelle,
      description: produit.description,
      prix: produit.prix,
      maison: produit.boutique,
    };
    return obj;
  }
}
