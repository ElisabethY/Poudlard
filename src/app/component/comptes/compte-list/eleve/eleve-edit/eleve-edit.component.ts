import { MaisonService } from './../../../../../service/maison.service';
import { Maison } from './../../../../../entity/maison';
import { Eleve } from './../../../../../entity/eleve';
import { Router, ActivatedRoute } from '@angular/router';
import { EleveService } from './../../../../../service/eleve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleve-edit',
  templateUrl: './eleve-edit.component.html',
  styleUrls: ['./eleve-edit.component.css'],
})
export class EleveEditComponent implements OnInit {
  eleve: Eleve = new Eleve();
  maisonArr: Maison[] = [];
  maison: Maison | undefined = new Maison();

  constructor(
    private aR: ActivatedRoute,
    private eleveService: EleveService,
    private router: Router,
    private maisonService: MaisonService
  ) {}

  ngOnInit(): void {
    this.maisonService.getAll().subscribe((result) => {
      this.maisonArr = result;
    });
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.eleveService
          .getEleveForUpdate(params['id'])
          .subscribe((result) => {
            this.eleve = result;
          });
      }
    });
  }
  save() {
    if (this.eleve.id) {
      this.eleveService.updateEleveIfAdmin(this.eleve).subscribe(() => {
        this.goList();
      });
    } else {
      this.eleveService.create(this.eleve).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/compte/eleves');
  }
  byIdMaison(m1: Maison, m2: Maison) {
    if (m1 && m2) return m1.id == m2.id;
    return false;
  }
}
