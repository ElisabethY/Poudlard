import { PanierService } from './../../../service/panier.service';
import { CompteService } from './../../../service/compte.service';
import { ProfService } from './../../../service/prof.service';
import { EleveService } from './../../../service/eleve.service';
import { Prof } from './../../../entity/prof';
import { Eleve } from './../../../entity/eleve';
import { Compte } from 'src/app/entity/compte';
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
  compteE: Compte = new Eleve();
  compteP: Compte = new Prof();
  message: string = '';

  constructor(
    private aR: ActivatedRoute,
    private produitDService: ProduitDetailService,
    private profService: ProfService,
    private eleveService: EleveService
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

      this.panier.push(
        new Produit(
          this.article.id,
          this.article.libelle,
          this.article.description,
          this.article.prix,
          this.article.boutique
        )
      );
      localStorage.setItem('monPanier', (JSON.stringify(this.panier)) )
     console.log( localStorage.getItem('monPanier'))
  


  }
}
