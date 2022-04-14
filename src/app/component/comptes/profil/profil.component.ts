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
  compteP: Compte = new Prof();
  erreur: boolean = false;
  message: string = '';
  logins: string = '';
  passwords: string = '';
  isEdition: boolean = false;
  isOK: boolean = false;
  soldeNew: number = 0;
  monSolde: number = 0;
  suc: boolean = false;
  isTransaction: boolean = false;
  msg: string = '';
  maisonUpdate: Maison = new Maison();

  constructor(
    private authService: AuthService,
    private aR: ActivatedRoute,
    private profService: ProfService,
    private eleveService: EleveService,
    private router: Router,
    private maisonService: MaisonService
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
    if (this.soldeNew != 0) {
      this.monSolde += this.soldeNew;
      localStorage.setItem('solde', JSON.stringify(this.monSolde));
      if (localStorage.getItem('role') == 'prof') {
        this.profService
          .get(Number(localStorage.getItem('id')))
          .subscribe((compteP) => {
            console.log(compteP);
            this.compteP = compteP;
          });

        this.profService.update(this.compteP).subscribe(() => {
          this.goList();
        });
      }
      if (localStorage.getItem('role') == 'eleve') {
        this.profService
          .get(Number(localStorage.getItem('id')))
          .subscribe((compteP) => {
            this.compte = compteP;
          });
        this.eleveService.update(this.compte).subscribe(() => {
          this.goList();
        });
      }
    } else {
      this.isEdition = false;
      this.isOK = false;
      this.isTransaction = true;
      this.msg = 'Solde Inchangé';
    }
  }

  goList() {
    this.router.navigateByUrl('/profil');
    this.isEdition = false;
    this.isOK = false;
    this.isTransaction = true;
    this.msg = 'Recharge Validée. Nouveau Solde : ' + this.monSolde;
    console.log(this.compte);
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
