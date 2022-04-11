import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from './../../../entity/produit';
import { Boutique } from './../../../entity/boutique';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Panier } from 'src/app/entity/panier';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
})
export class ProduitListComponent implements OnInit {
  produit: Produit[] = [];
  article : Produit= new Produit;
  identifiant: number = 0;



  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list() {

    this.activatedRoute.params.subscribe((params) => {
      this.identifiant = params['id'];
      console.log(params)
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
        } console.log(result)
      });
    }
  }

  delete(id: number) {
    this.produitService.delete(id).subscribe(() => {
      this.list();
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get role() {
    return localStorage.getItem('role');
  }
}

