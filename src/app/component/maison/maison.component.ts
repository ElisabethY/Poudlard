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
  scoreNow= localStorage.getItem('score')
  // house: Maison = new Maison;

  constructor(private maisonService: MaisonService
    , private authService:AuthService) {
    //this.house = new Maison;

  }

  ngOnInit(): void {
    this.list();
    localStorage.setItem('score', JSON.stringify(this.scoreNow))
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
