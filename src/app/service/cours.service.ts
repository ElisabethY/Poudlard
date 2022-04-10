import { Cours } from './../entity/cours';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private static URL: string = 'http://localhost:8080/poudlard/api/cours';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any[]> {
    return this.http.get<any[]>(CoursService.URL);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${CoursService.URL}/${id}`);
  }

  public get(id: number): Observable<any> {
    return this.http.get<any>(`${CoursService.URL}/${id}`);
  }

  public create(cours: Cours): Observable<any> {
    return this.http.post(CoursService.URL, this.CoursToJson(cours));
  }

  public update(cours: Cours): Observable<any> {
    return this.http.put(`${CoursService.URL}/${cours.id}`, this.CoursToJson(cours));
  }

  private CoursToJson(cours: Cours): any {
    let obj = {
      id: cours.id,
      intitule: cours.intitule,
      professeur: cours.professeur,
    };
    return obj;
  }
}
