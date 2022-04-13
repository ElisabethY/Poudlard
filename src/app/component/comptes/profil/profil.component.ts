import { MaisonService } from './../../../service/maison.service';
import { Maison } from './../../../entity/maison';
import { Prof } from './../../../entity/prof';
import { Eleve } from './../../../entity/eleve';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/entity/compte';
import { ProfService } from 'src/app/service/prof.service';
import { EleveService } from 'src/app/service/eleve.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  compte: Compte = new Eleve();
  comptes: Compte = new Prof();
  erreur: boolean = false;
  message: string = '';
  logins: string = '';
  passwords: string = '';
  isEdition: boolean = false;
  isOK: boolean = false;
  soldeNew: number = 0;
  monSolde: number = 0;
  suc: boolean = false
  isTransaction: boolean= false
  msg:string='';
  maisonUpdate:Maison=new Maison()
  
  constructor(
    private authService: AuthService,
    private aR: ActivatedRoute,
    private profService: ProfService,
    private eleveService: EleveService,
    private maisonService: MaisonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aR.queryParams.subscribe((params) => {
      if (params['auth']) {
        this.erreur = true;
        this.message = 'Identifiants non reconnus';
      }
    });
  }
  check() {
    if (this.logins == localStorage.getItem('login')) {
      console.log(this.logins);
      this.erreur = false;
      return (this.isOK = true);
    } else {
      this.erreur = true;
      return (this.message = 'informations incorrectes');
    }
  }

  edition() {
    this.isEdition = true;
  }

  recharge() {
    this.monSolde = Number(localStorage.getItem('solde'));
    if(this.soldeNew !=0){
    this.monSolde += this.soldeNew;
    if (localStorage.getItem('role') == 'prof') {
      this.comptes.type = localStorage.getItem('role')!
      this.comptes.solde = this.monSolde
      this.comptes.id = Number(localStorage.getItem('id'))
      this.comptes.nom = localStorage.getItem('nom')!
      this.comptes.prenom = localStorage.getItem('prenom')!
      this.comptes.naissance = new Date(localStorage.getItem('naissance')!)
      this.comptes.password = localStorage.getItem('password')
      this.comptes.login =  localStorage.getItem('login')!
      // this.maisonUpdate.id= Number(localStorage.getItem('maisonId')!)
      // this.maisonUpdate.nom= localStorage.getItem('maison')!
      // this.maisonUpdate.score= Number(localStorage.getItem('score')!)
      // this.comptes.maison= <Maison>this.maisonUpdate
    
      localStorage.setItem('solde', JSON.stringify(this.monSolde))
      this.profService.update(this.comptes).subscribe(() => {
        this.goList();
      });
    }
    if (localStorage.getItem('role') == 'eleve') {
      this.compte.type = localStorage.getItem('role')!
      this.compte.solde = this.monSolde
      this.compte.id = Number(localStorage.getItem('id'))
      this.compte.nom = localStorage.getItem('nom')!
      this.compte.prenom = localStorage.getItem('prenom')!
      this.compte.naissance = new Date(localStorage.getItem('naissance')!)
      this.compte.password = localStorage.getItem('password')
      this.compte.login =  localStorage.getItem('login')!
      // this.maisonUpdate.id = Number(localStorage.getItem('maisonId')!)
      // this.maisonUpdate.nom= localStorage.getItem('maison')!
      // this.maisonUpdate.score= Number(localStorage.getItem('score')!)
     
      // this.maisonService.create(this.maisonUpdate).subscribe(() => {
      // });
      // this.compte.maison= this.maisonUpdate
      // this.compte.maison.id=  this.maisonUpdate.id
      // this.compte.maison.score=  this.maisonUpdate.score
      // this.compte.maison.nom=   this.maisonUpdate.nom
      localStorage.setItem('solde', JSON.stringify(this.monSolde))
      this.eleveService.update(this.compte).subscribe(() => {
        this.goList();
      });
    }}
    else{
      this.isEdition = false;
      this.isOK = false
      this.isTransaction = true
      this.msg='Solde Inchangé'}
  }
  goList() {
    this.router.navigateByUrl('/profil');
    this.isEdition = false;
    this.isOK = false
    this.isTransaction = true
    this.msg='Recharge Validée. Nouveau Solde : '+this.monSolde;
    console.log(this.compte)
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  role() {
    return localStorage.getItem('role');
  }
  get login() {
    return localStorage.getItem('login');
  }
  get prenom() {
    return localStorage.getItem('prenom');
  }
  get password() {
    return localStorage.getItem('password');
  }
  get nom() {
    return localStorage.getItem('nom');
  }
  get maison() {
    return localStorage.getItem('maison');
  }
  get solde() {
    return localStorage.getItem('solde');
  }
}
