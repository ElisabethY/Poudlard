import { Evenement } from './../entity/evenement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private static URL: string = 'http://localhost:8080/poudlard/api/evenement';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(EvenementService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EvenementService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${EvenementService.URL}/${id}`);
  }

  public create(event: Evenement): Observable<any> {
    return this.http.post(EvenementService.URL, this.eventToJson(event));
  }

  public update(event: Evenement): Observable<any> {
    return this.http.put(`${EvenementService.URL}/${event.id}`, this.eventToJson(event));
  }

  private eventToJson(event: Evenement): any {
    let obj = {
      id: event.id,
      nomEven: event.nomEven,
      date: event.date,
      heure: event.heure,
    };
    return obj;
  }
}
