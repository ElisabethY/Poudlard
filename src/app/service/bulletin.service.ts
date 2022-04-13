import { Observable } from 'rxjs';
import { Bulletin } from './../entity/bulletin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private static URL: string = 'http://localhost:8080/poudlard/api/bulletin/eleve';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(BulletinService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${BulletinService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${BulletinService.URL}/${id}`);
  }

  // public create(bulletin : Bulletin): Observable<any> {
  //   return this.http.post(BulletinService.URL, this.BulletinToJson(bulletin));
  // }

  // public update(bulletin: Bulletin): Observable<any> {
  //   return this.http.put(`${BulletinService.URL}/${bulletin.id}`, this.BulletinToJson(bulletin));
  // }

  private BulletinToJson(bulletin: Bulletin): any {
    let obj = {
      id: bulletin.id,
      cours: bulletin.cours,
      note:bulletin.note,
      commentaire : bulletin.commentaire,
    };
    return obj;
  }
}
