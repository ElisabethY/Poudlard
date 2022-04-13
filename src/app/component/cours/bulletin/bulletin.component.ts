import { BulletinEditService } from './../../../service/bulletin-edit.service';
import { Bulletin } from './../../../entity/bulletin';
import { BulletinService } from './../../../service/bulletin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {
  bulletins:Bulletin[] = [];
  identifiant: number = 0;

  constructor(
    private bulletin:BulletinService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    if (localStorage.getItem('role')=='prof'){ 
      
    this.activatedRoute.params.subscribe((params) => {
      this.identifiant = params['id'];
      console.log(params)
    });
    {
      this.bulletin.get(this.identifiant).subscribe((result) => {
        this.bulletins = [];
        console.log(result)

        for (let p of result) {
          {
            this.bulletins.push(
              new Bulletin(p.id, p.cours.intitule, p.note, p.commentaire));
          }
        }
      });
    }}
    if (localStorage.getItem('role')=='eleve'){ 
      
    this.activatedRoute.params.subscribe((params) => {
      this.identifiant= Number(localStorage.getItem('id'))
      console.log(params)
    });
      {
        this.bulletin.get(this.identifiant).subscribe((result) => {
          this.bulletins = [];
          console.log(result)
  
          for (let p of result) {
            {
              this.bulletins.push(
                new Bulletin(p.id, p.cours.intitule, p.note, p.commentaire));
            }
          }
        });
      }}
  }

  delete(id: number) {
    this.bulletin.delete(id).subscribe(() => {
      this.list();
    });
  }

}
