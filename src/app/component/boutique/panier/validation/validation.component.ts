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
    private router: Router //  private maisonService :MaisonService
  ) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('maison'));
  }

  acheter() {
    this.monSolde = Number(localStorage.getItem('solde'));
    if (this.monSolde - Number(this.prixTotal) >= 0) {
      // MAJ du compte(solde) et enregistrement du panier dans la DB (historique)
      this.monSolde -= Number(this.prixTotal);
      //   console.log(this.monSolde - Number(this.prixTotal));
      if (localStorage.getItem('role') == 'prof') {
        this.compteP.solde = this.monSolde;
        this.compteP.type = localStorage.getItem('role')!;
        this.compteP.id = Number(localStorage.getItem('id'));
        this.compteP.nom = localStorage.getItem('nom')!;
        this.compteP.prenom = localStorage.getItem('prenom')!;
        this.compteP.naissance = new Date(localStorage.getItem('naissance')!);
        this.compteP.password = localStorage.getItem('password');
        this.compteP.login = localStorage.getItem('login')!;
        // this.maison.nom = localStorage.getItem('maison') || '{}'
        // this.maison.id = Number(localStorage.getItem('maisonId'))
        // this.maison.score = Number(localStorage.getItem('score'))
        // this.compteP.maison = this.maison
        localStorage.setItem('solde', JSON.stringify(this.monSolde));
        this.profService.update(this.compteP).subscribe(() => {
          this.goList();
        });
        // this.monPanier.Compte= this.compteP
        // this.panierService.create(this.monPanier).subscribe(()=>
        // {
        //   console.log("ENREGISTREMENT DANS HISTORIQUE OK")
        // })
      }
      if (localStorage.getItem('role') == 'eleve') {
        this.compteE.solde = this.monSolde;
        this.compteE.type = localStorage.getItem('role')!;
        this.compteE.id = Number(localStorage.getItem('id'));
        this.compteE.nom = localStorage.getItem('nom')!;
        this.compteE.prenom = localStorage.getItem('prenom')!;
        this.compteE.naissance = new Date(localStorage.getItem('naissance')!);
        this.compteE.password = localStorage.getItem('password');
        this.compteE.login = localStorage.getItem('login')!;
        this.profService.update(this.compteE).subscribe(() => {
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
      console.log('NOPE');
    }
  }
  goList() {
    this.router.navigateByUrl('/panier');
  }
}
