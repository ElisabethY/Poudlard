import { Prof } from './../../../../../entity/prof';
import { Cours } from './../../../../../entity/cours';
import { Maison } from './../../../../../entity/maison';
import { ProfService } from './../../../../../service/prof.service';
import { CoursService } from './../../../../../service/cours.service';
import { MaisonService } from './../../../../../service/maison.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.css'],
})
export class ProfEditComponent implements OnInit {
  prof: Prof = new Prof();
  coursArr: Cours[] = [];
  cours: Cours | undefined = new Cours();
  maisonArr: Maison[] = [];
  maison: Maison | undefined = new Maison();

  constructor(
    private aR: ActivatedRoute,
    private ProfService: ProfService,
    private coursService: CoursService,
    private maisonService: MaisonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.coursService.getAll().subscribe((result) => {
      this.coursArr = result;
    });
    this.maisonService.getAll().subscribe((result) => {
      this.maisonArr = result;
    });
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.ProfService.get(params['id']).subscribe((result) => {
          this.prof = result;
        });
      }
    });
  }
  save() {
    if (this.prof.id) {
      this.goList();
    }
    else {


      this.ProfService.create(this.prof).subscribe((prof) => {
        
        this.goList();
        this.cours!.professeur = prof;
        this.coursService.create(this.cours!).subscribe(() => {});
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/compte/professeurs');
  }

  byId(obj1: Cours, obj2: Cours) {
    if (obj1 && obj2) return obj1.id == obj2.id;
    return false;
  }

  byIdMaison(m1: Maison, m2: Maison) {
    if (m1 && m2) return m1.id == m2.id;
    return false;
  }
}
