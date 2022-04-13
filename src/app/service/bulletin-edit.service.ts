import { Bulletin } from './../entity/bulletin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulletinEditService {

  private static URL: string = 'http://localhost:8080/poudlard/api/bulletin';
  private static PUT: string = 'http://localhost:8080/poudlard/api/bulletin/update';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(BulletinEditService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${BulletinEditService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${BulletinEditService.URL}/${id}`);
  }

  public create(bulletin : Bulletin): Observable<any> {
    return this.http.post(BulletinEditService.URL, this.BulletinToJson(bulletin));
  }

  public update(bulletin: Bulletin): Observable<any> {
    return this.http.put(`${BulletinEditService.PUT}/${bulletin.id}`, this.BulletinToJson(bulletin));
  }

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
