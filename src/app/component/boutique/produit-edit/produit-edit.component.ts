import { Produit } from './../../../entity/produit';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { ProduitService } from 'src/app/service/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Boutique } from 'src/app/entity/boutique';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
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
        this.produitService.getDetail(params['id']).subscribe((result) => {
          this.produit = result;
          console.log(result);
        });
      }
    });
  }

  save() {
    if (this.produit.id) {
    console.log("on entre dans le save")
      this.produitService.update(this.produit).subscribe((result) => {
        this.goList();
        console.log(result)
      });
    } else {
      this.produitService.create(this.produit).subscribe((result) => {
        this.goList();
        console.log(result)
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/boutique');
  }

  byIdBoutique(b1: Boutique, b2: Boutique) {
    if (b1 && b2) return b1.id == b2.id;
    return false;
  }

}
