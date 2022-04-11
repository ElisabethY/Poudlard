import { AuthService } from './../../service/auth.service';
import { MaisonService } from './../../service/maison.service';
import { Maison } from './../../entity/maison';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {
  maisons: Maison[]=[];
  ajouter:number=0;
  // house: Maison = new Maison;

  constructor(private maisonService: MaisonService
    , private authService:AuthService) {
    //this.house = new Maison;

  }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.maisonService.getAll().subscribe((result) => {
      this.maisons=[];
      for (let e of result){
        this.maisons.push(
          new Maison(e.id, e.nom, e.score)
        )
      }
    });}
  // add(house : Maison, points : number){
  //     this.house = house;
  //     this.house.score = this.house.score! + points;
  //     this.maisonService.update(this.house).subscribe()
  // }
  delete(id: number) {
    this.maisonService.delete(id).subscribe((ok) => {
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
