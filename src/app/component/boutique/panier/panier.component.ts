import { Router } from '@angular/router';
import { LivraisonService } from './../../../service/livraison.service';
import { Livraison } from './../../../entity/livraison';
import { Produit } from './../../../entity/produit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  monPanier = JSON.parse(localStorage.getItem('monPanier') || '{}');
  prixTotal: number = 0;
  prixCalc:number=0;
  monSolde: number= 0;
  message : string =''
  isAchat: boolean = false
  livraisons : Livraison[]= []
  livraisonChoix : Livraison= new Livraison()
  isResume:boolean=false
  prixLivraison:number=0
  prixAvecLivraison: number= 0

  constructor(private livraisonService: LivraisonService,
    private router:Router) { }

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

livraison(){

this.livraisonService.getAll().subscribe((result)=>{
  this.livraisons =[];
  for (let e of result) {
    this.livraisons.push(new Livraison(e.id, e.modeLivraion, e.description, e.prix));
  }
})
return this.isAchat=true;
// this.monSolde= Number(localStorage.getItem('solde'))
// if(this.monSolde-this.prixTotal>=0){
// console.log(this.monSolde-this.prixTotal)
// this.message= 'Veuillez choisir un mode de livraison'
// return
// }
}
choixLivraison(prix:any){
  this.livraisonChoix.prix = prix
  this.prixAvecLivraison = this.prixTotal+ Number(this.livraisonChoix.prix)
  console.log(this.prixTotal)
  this.isResume = true;

}
valider(){
  this.router.navigateByUrl('/panier/validation');
}
}

