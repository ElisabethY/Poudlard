import { BulletinService } from './../../../../service/bulletin.service';
import { EleveService } from 'src/app/service/eleve.service';
import { Eleve } from './../../../../entity/eleve';
import { BulletinEditService } from './../../../../service/bulletin-edit.service';
import { Bulletin } from './../../../../entity/bulletin';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-edit',
  templateUrl: './bulletin-edit.component.html',
  styleUrls: ['./bulletin-edit.component.css']
})
export class BulletinEditComponent implements OnInit {
  bulletin: Bulletin= new Bulletin();
  compte : Eleve =new Eleve()


  constructor (private aR:ActivatedRoute,
    private bService: BulletinEditService,
    private bulletinervice: BulletinService,
    private eleveService :EleveService,
    private router: Router) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      if(params['id']){
       this.bulletinervice.get(params['id']).subscribe((result)=>{
        this.bulletin=result;
       })
      }
    })
  }
  save() {
    if (this.bulletin.id) {
      this.bService.update(this.bulletin).subscribe(() => {
        this.compte.type = localStorage.getItem('role')!
      this.compte.solde = Number(localStorage.getItem('solde')!)
      this.compte.id = Number(localStorage.getItem('id'))
      this.compte.nom = localStorage.getItem('nom')!
      this.compte.prenom = localStorage.getItem('prenom')!
      this.compte.naissance = new Date(localStorage.getItem('naissance')!)
      this.compte.password = localStorage.getItem('password')
      this.compte.login =  localStorage.getItem('login')!
      this.eleveService.update(this.compte).subscribe(() => {});
        this.goList();
      });
        }
  }

  goList() {
    this.router.navigateByUrl('/cours');
  }
}
