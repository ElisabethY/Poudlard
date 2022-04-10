import { ActivatedRoute } from '@angular/router';
import { BoutiqueService } from './../../../service/boutique.service';
import { Produit } from './../../../entity/produit';
import { Boutique } from './../../../entity/boutique';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
})
export class ProduitListComponent implements OnInit {
  produit: Produit[] = [];
  boutiques: Boutique[] = [];
  identifiant: number = 0;

  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {

    this.activatedRoute.params.subscribe((params) => {
      this.identifiant = params['id'];
    });

    {
      this.produitService.get(this.identifiant).subscribe((result) => {
        this.produit = [];
        console.log(result)

        for (let p of result) {
          {
            this.produit.push(
              new Produit(p.id, p.libelle, p.description, p.prix));
          }
        }
      });
    }
  }

  delete(id: number) {
    this.produitService.delete(id).subscribe(() => {
      this.list();
    });
  }

 //si authentifié (compte PROF OU ELEVE)
// au click il faut pouvoir ajouter les articles dans le panier du compte
  addPanier(){

  }
}
