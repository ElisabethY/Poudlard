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
  monPanier:Produit[] = JSON.parse(localStorage.getItem('monPanier') || '{}');
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
  vide:string=''

  constructor(private livraisonService: LivraisonService,
    private router:Router) { }

  ngOnInit(): void {
    this.total();
  }
total(){
    for (let p of this.monPanier)
  {
    this.prixCalc += Number(p.prix);
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
}
choixLivraison(l:any){
  this.livraisonChoix.modeLivraion = l.modeLivraion
  this.livraisonChoix.prix = l.prix
  localStorage.setItem('livraisonMode', JSON.stringify(this.livraisonChoix.modeLivraion))
  localStorage.setItem('livraisonPrix', JSON.stringify(this.livraisonChoix.prix))
  this.prixAvecLivraison = this.prixTotal+ Number(this.livraisonChoix.prix)
  localStorage.setItem('prixTotal', JSON.stringify(this.prixAvecLivraison))
  this.isResume = true;
}
valider(){
  this.router.navigateByUrl('/panier/validation');
}
}

