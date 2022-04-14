import { AuthService } from './../../../service/auth.service';
import { Eleve } from './../../../entity/eleve';
import { ActivatedRoute } from '@angular/router';
import { EleveService } from './../../../service/eleve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-eleves',
  templateUrl: './liste-eleves.component.html',
  styleUrls: ['./liste-eleves.component.css'],
})
export class ListeElevesComponent implements OnInit {
  eleves: Eleve[] = [];
  identifiant: number = 0;

  constructor(
    private eleveService: EleveService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.activatedRoute.params.subscribe((params) => {
      this.identifiant = params['id'];
      console.log(params);
      this.eleveService.getbyCours(this.identifiant).subscribe((result) => {
        this.eleves = [];

        for (let p of result) {
          {
            this.eleves.push(
              new Eleve(
                p.id,
                p.login,
                p.nom,
                p.prenom,
                p.naissance,
      
              )
            );
          }
        }
      });
    });
  }
}
