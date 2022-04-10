import { Maison } from './../entity/maison';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  private static URL: string = 'http://localhost:8080/poudlard/api/maison';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(MaisonService.URL);
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${MaisonService.URL}/${id}`);
  }
  public get(id: number): Observable<any> {
    return this.http.get<any>(`${MaisonService.URL}/${id}`);
  }
  public update(maison: Maison): Observable<any> {
    return this.http.put(`${MaisonService.URL}/${maison.id}`, this.maisonToJson(maison));
  }

  public create(event: Maison): Observable<any> {
    return this.http.post(MaisonService.URL, this.maisonToJson(event));
  }


  private maisonToJson(maison: Maison): any {
    let obj = {
      id: maison.id,
      nom: maison.nom,
      score: maison.score,
    };
    return obj;
  }
}
