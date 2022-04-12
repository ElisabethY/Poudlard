import { Produit } from './../../../entity/produit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articles : Produit[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
