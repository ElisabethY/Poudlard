import { AuthService } from './../../../service/auth.service';
import { CoursService } from './../../../service/cours.service';


import { Cours } from './../../../entity/cours';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours-liste',
  templateUrl: './cours-liste.component.html',
  styleUrls: ['./cours-liste.component.css']
})

export class CoursListeComponent implements OnInit {
  cours: Cours[]=[];
  identifiant: number = 0;
  courss : Cours= new Cours();


  constructor(private courService: CoursService,
    private authService: AuthService) {}

  ngOnInit(): void {
    if(localStorage.getItem('role')=='eleve' || localStorage.getItem('role')=='admin')
   { this.list();}
   if(localStorage.getItem('role')=='prof')
   { this.listbyProf();}

  }
  listbyProf(){
    this.courService.getAll().subscribe((result)=> {
      this.cours=[];
      for (let c of result){
        console.log(c.professeur?.id) //undefined x9
        if (c.professeur?.id == Number(localStorage.getItem('id')))
        {
          this.cours.push(
            new Cours(c.id, c.intitule, c.professeur.nom)
          )
        }
      }
    })
  }
  list() {
    this.courService.getAll().subscribe((result) => {
      this.cours=[];
      for (let e of result){
        this.cours.push(
          new Cours(e.id, e.intitule, e.professeur)

        )
      }
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
