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

  constructor(
    private aR: ActivatedRoute,
    private eleveService: EleveService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
}
