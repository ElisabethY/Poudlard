import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boutique } from 'src/app/entity/boutique';
import { Produit } from 'src/app/entity/produit';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {
  produit: Produit  = new Produit();
  boutiqueArr: Boutique[] = [];

  constructor(
    private aR: ActivatedRoute,
    private produitService: ProduitService,
    private bService : BoutiqueService,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.bService.getAll().subscribe((result) => {
      console.log(result)
      this.boutiqueArr = result;
    });
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.produitService.get(params['id']).subscribe((result) => {
          this.produit = result;
          console.log(result);
        });
      }
    });
  }

  save() {

      this.produitService.create(this.produit).subscribe((result) => {
        this.goList();
        console.log(result)
      });

  }

  goList() {
    this.router.navigateByUrl('/boutique');
  }


  byIdBoutique(b1: Boutique, b2: Boutique) {
    if (b1 && b2) return b1.id == b2.id;
    return false;
  }

}
