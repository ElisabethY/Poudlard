import { BoutiqueService } from './../../../service/boutique.service';
import { Categorie } from './../../../entity/categorie';
import { Boutique } from './../../../entity/boutique';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique-edit',
  templateUrl: './boutique-edit.component.html',
  styleUrls: ['./boutique-edit.component.css'],
})
export class BoutiqueEditComponent implements OnInit {
  boutique: Boutique = new Boutique();
  categorie = Categorie;
  enumKey: [] = [];

  constructor(
    private aR: ActivatedRoute,
    private boutiqueService: BoutiqueService,
    private router: Router
  ) {}
  //test
  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.boutiqueService.get(params['id']).subscribe((result) => {
          this.boutique = result;
          console.log(this.categorie);
        });
      }
    });
  }

  save() {
    if (this.boutique.id) {
      this.boutiqueService.update(this.boutique).subscribe((result) => {
        this.goList();
      });
    } else {
      this.boutiqueService.create(this.boutique).subscribe((result) => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/boutique');
  }
}
