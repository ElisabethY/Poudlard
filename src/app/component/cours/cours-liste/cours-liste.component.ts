import { AuthService } from './../../../service/auth.service';
import { CoursService } from './../../../service/cours.service';
import { Maison } from './../../../entity/maison';

import { Cours } from './../../../entity/cours';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours-liste',
  templateUrl: './cours-liste.component.html',
  styleUrls: ['./cours-liste.component.css']
})

export class CoursListeComponent implements OnInit {
  cours: Cours[]=[];

  constructor(private courService: CoursService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.courService.getAll().subscribe((result) => {
      this.cours=[];
      for (let e of result){
        this.cours.push(
          new Cours(e.id, e.intitule, e.professeur)

        )
      } console.log(result);
    });
 }

    delete(id: number) {
      this.courService.delete(id).subscribe((ok) => {
        console.log("deleted")
        this.list();
      });
    }
    isAuthenticated() {
      return this.authService.isAuthenticated();
    }

    get role() {
       return localStorage.getItem('role');
    }
}
