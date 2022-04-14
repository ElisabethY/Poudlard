import { Cours } from './../../../../entity/cours';
import { BulletinService } from './../../../../service/bulletin.service';
import { Eleve } from './../../../../entity/eleve';
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
    private bulletinervice: BulletinService,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.bulletinervice.getModule(params['id']).subscribe((result) => {
          this.bulletin = result
          console.log(this.bulletin);
        });
      }
    });
  }
  save() {
    if (this.bulletin.id) {
      console.log(this.compte);
      this.bulletinervice.update(this.bulletin).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/cours');
  }
}
