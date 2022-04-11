import { HttpClient } from '@angular/common/http';
import { Produit } from 'src/app/entity/produit';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitDetailService {
  private static URL: string = 'http://localhost:8080/poudlard/api/catalogue';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(ProduitDetailService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${ProduitDetailService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${ProduitDetailService.URL}/${id}`);
  }

  public create(produit: Produit): Observable<any> {
    return this.http.post(ProduitDetailService.URL, this.produitToJson(produit));
  }

  public update(produit: Produit): Observable<any> {
    return this.http.put(`${ProduitDetailService.URL}/${produit.id}`, this.produitToJson(produit));
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
