import { Produit } from './../../../entity/produit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  monPanier = JSON.parse(localStorage.getItem('monPanier') || '{}');
  prixTotal: number = 0;
  prixCalc:number=0;
  constructor() { }

  ngOnInit(): void {
    this.total();
    console.log(this.prixTotal)
  }
total(){
  for (let p of this.monPanier)
  {
    this.prixCalc += p.prix;
  }
 return this.prixTotal= this.prixCalc
}
}
