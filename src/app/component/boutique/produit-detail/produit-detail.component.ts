import { ProduitDetailService } from './../../../service/produit-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/entity/produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css'],
})
export class ProduitDetailComponent implements OnInit {
  panier: Produit[] = [];
  article: Produit = new Produit();
  message: string = '';

  constructor(
    private aR: ActivatedRoute,
    private produitDService: ProduitDetailService,
    private route:Router

  ) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.produitDService.get(params['id']).subscribe((result) => {
          this.article = result;
        });
      }
    });
  }
  addPanier() {

    let obj = {
      id:  this.article.id,
      libelle: this.article.libelle,
      description: this.article.description,
      prix: this.article.prix,
      boutique: this.article.boutique?.nom
     }

     let objarr = []

    if(localStorage.getItem('monPanier')){

      objarr = JSON.parse(localStorage.getItem('monPanier') || '{}');

      if (objarr.find((i:any) => i.id == this.article.id))
      {
        console.log("EXISTE DEJA DANS LE PANIER")
        return this.message='ITEM DEJA PRESENT DANS LE PANIER'
      }
      else{
        console.log("EXISTE PAS DANS PANIER ")
        objarr.push(obj)
        this.message='PRODUIT AJOUTE AU PANIER'
      }}
      else {
         objarr.push(obj)
        this.message='PRODUIT AJOUTE AU PANIER'

      }

      localStorage.setItem('monPanier', JSON.stringify(objarr))
      return  console.log(localStorage.getItem('monPanier'))
}
}
