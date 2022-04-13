import { Cours } from './../../../../entity/cours';
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
  styleUrls: ['./bulletin-edit.component.css'],
})
export class BulletinEditComponent implements OnInit {
  bulletin: Bulletin = new Bulletin();
  cours: Cours = new Cours();
  compte: Eleve = new Eleve();

  constructor(
    private aR: ActivatedRoute,
    private bService: BulletinEditService,
    private bulletinervice: BulletinService,
    private eleveService: EleveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.bulletinervice.get(params['id']).subscribe((result) => {
          this.bulletin = result;
          this.cours.intitule = this.bulletin.cours?.intitule;
          this.compte.id = this.bulletin.eleve?.id;
          this.compte.type = this.bulletin.eleve?.type;
          this.compte.maison = this.bulletin.eleve?.maison;
          this.compte.nom = this.bulletin.eleve?.nom;
          this.compte.prenom = this.bulletin.eleve?.prenom;
          this.compte.password = this.bulletin.eleve?.password;
          this.compte.login = this.bulletin.eleve?.login;
          this.compte.naissance = this.bulletin.eleve?.naissance;
          this.compte.solde = this.bulletin.eleve?.solde;
          this.bulletin.eleve = this.compte;
          console.log(this.bulletin.eleve);
        });
      }
    });
  }
  save() {
    if (this.bulletin.id) {
      console.log(this.compte)
      this.bulletin.eleve = this.compte;
      this.bService.update(this.bulletin).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/cours');
  }
}
