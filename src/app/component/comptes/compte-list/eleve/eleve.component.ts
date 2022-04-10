import { Maison } from './../../../../entity/maison';
import { Eleve } from './../../../../entity/eleve';
import { EleveService } from './../../../../service/eleve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {
  eleves: Eleve[]=[];

  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.eleveService.getAll().subscribe((result) => {
      this.eleves=[];
      for (let e of result){
        this.eleves.push(
          new Eleve(e.id, e.login, e.nom, e.prenom,e.naissance, e.maison)

        );
      }
    });}

    delete(id: number) {
      this.eleveService.delete(id).subscribe((ok) => {
        console.log("deleted")
        this.list();
      });
    }
getMaison(eleve:Eleve): Maison | undefined{
  console.log(eleve.maison);
  return eleve.maison;
  }

}
