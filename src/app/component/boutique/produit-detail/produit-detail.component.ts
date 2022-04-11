import { ProduitDetailService } from './../../../service/produit-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Panier } from 'src/app/entity/panier';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/entity/produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css'],
})
export class ProduitDetailComponent implements OnInit {
  article: Produit = new Produit();
  click: number = 0;
  panier: Panier = new Panier();
  constructor(
    private aR: ActivatedRoute,
    private produitDService: ProduitDetailService
  ) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.produitDService.get(params['id']).subscribe((result) => {
          this.article = result;
          console.log(result)

        });
      }
    });
  }
  addPanier() {
    this.click++;
    this.panier.quantite = this.click;
    console.log(this.panier.quantite);

    console.log(this.article.id);
  }
}
