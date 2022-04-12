import { Livraison } from './../entity/livraison';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private static URL: string = 'http://localhost:8080/poudlard/api/livraisons';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(LivraisonService.URL);
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`$LivraisonService.URL}/${id}`);
  }
  public get(id: number): Observable<any> {
    return this.http.get<any>(`$LivraisonService.URL}/${id}`);
  }
  public update(livraison: Livraison): Observable<any> {
    return this.http.put(`${LivraisonService.URL}/${livraison.id}`, this.LivraisonToJson(livraison));
  }

  public create(livraison: Livraison): Observable<any> {
    return this.http.post(LivraisonService.URL, this.LivraisonToJson(livraison));
  }


  private LivraisonToJson(livraison: Livraison): any {
    let obj = {
      id: livraison.id,
      modeLivraion: livraison.modeLivraion,
      description: livraison.description,
      prix: livraison.prix,

    };
    return obj;
  }
}
