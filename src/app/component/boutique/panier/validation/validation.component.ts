import { EleveService } from 'src/app/service/eleve.service';
import { MaisonService } from './../../../../service/maison.service';
import { Maison } from './../../../../entity/maison';
import { Router } from '@angular/router';
import { ProfService } from './../../../../service/prof.service';
import { Prof } from './../../../../entity/prof';
import { Eleve } from './../../../../entity/eleve';
import { Compte } from 'src/app/entity/compte';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  monPanier = JSON.parse(localStorage.getItem('monPanier') || '{}');
  prixTotal = localStorage.getItem('prixTotal');
  livraisonMode = localStorage.getItem('livraisonMode');
  livraisonPrix = localStorage.getItem('livraisonPrix');
  monSolde: number = 0;
  message: string = '';
  isAchat: boolean = false;
  compteE: Compte = new Eleve();
  compteP: Compte = new Prof();
  maison: Maison = new Maison();

  constructor(
    private profService: ProfService,
    private eleveService: EleveService,
    private router: Router //  private maisonService :MaisonService
  ) {}

  ngOnInit(): void {}

  acheter() {
    this.monSolde = Number(localStorage.getItem('solde'));
    if (this.monSolde - Number(this.prixTotal) >= 0) {
      this.monSolde -= Number(this.prixTotal);
      localStorage.setItem('solde', JSON.stringify(this.monSolde));
      if (localStorage.getItem('role') == 'prof') {
        this.compteP.solde = this.monSolde;
        this.profService.update(this.compteP).subscribe(() => {
          this.goList();
        });
        // this.monPanier.Compte= this.compteP
        // this.panierService.create(this.monPanier).subscribe(()=>
        // {
        // })
      }
      if (localStorage.getItem('role') == 'eleve') {
        this.compteE.solde = this.monSolde;
        this.eleveService.update(this.compteE).subscribe(() => {
          this.goList();
        });
      }
      this.isAchat = true;
      this.message = 'Achat Validé';
      localStorage.removeItem('livraisonPrix');
      localStorage.removeItem('livraisonMode');
      localStorage.removeItem('monPanier');
      localStorage.removeItem('prixTotal');
    } else {
      this.isAchat = true;
      this.message = 'Solde Insuffisant';
    }
  }
  goList() {
    this.router.navigateByUrl('/panier');
  }
}
