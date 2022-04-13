import { Cours } from './../../../../entity/cours';
import { CoursService } from './../../../../service/cours.service';
import { Maison } from './../../../../entity/maison';
import { ProfService } from './../../../../service/prof.service';
import { Prof } from './../../../../entity/prof';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  profs: Prof[]=[];
  cours:Cours[]=[]

  constructor(private profService: ProfService,
    private coursService:CoursService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.profService.getAll().subscribe((result) => {
      this.profs=[];
      for (let e of result){
          this.profs.push(
          new Prof(e.id, e.login, e.nom, e.prenom,e.naissance,e.maison)
        )
        this.coursService.getAll().subscribe((results) => {
          this.cours=[];
          for (let c of results){
            if(c.prof == e){
              this.cours.push(new Cours(c.id, c.intitule, c.prof))
            }
          }
        })

      }
    })}

    delete(id: number) {
      this.profService.delete(id).subscribe(() => {
        this.list();
      });
    }
getMaison(prof:Prof): Maison | undefined{
  return prof.maison;
  }

  }



