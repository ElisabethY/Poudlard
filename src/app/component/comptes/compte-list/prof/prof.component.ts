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

  constructor(private profService: ProfService) {}

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
      }
    });}

    delete(id: number) {
      this.profService.delete(id).subscribe((ok) => {
        console.log("deleted")
        this.list();
      });
    }
getMaison(prof:Prof): Maison | undefined{
  console.log(prof.maison);
  return prof.maison;
  }

  }



