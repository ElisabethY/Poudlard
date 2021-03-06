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
  maMaison = localStorage.getItem('maison');

  constructor(
    private authService: AuthService,
    private aR: ActivatedRoute,
    private profService: ProfService,
    private eleveService: EleveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aR.queryParams.subscribe((params) => {
      console.log(this.maMaison);
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
            compteP.solde = this.monSolde;
            this.profService.update(compteP).subscribe(() => {
              this.goList();
            });
          });
      }
      if (localStorage.getItem('role') == 'eleve') {
        this.eleveService
          .getEleveForUpdate(Number(localStorage.getItem('id')))
          .subscribe((compteE) => {
            console.log(compteE);
            compteE.solde = this.monSolde;
            this.eleveService.update(compteE).subscribe(() => {
              this.goList();
            });
          });
      }
    } else {
      this.isEdition = false;
      this.isOK = false;
      this.isTransaction = true;
      this.msg = 'Solde Inchang??';
    }
  }

  goList() {
    this.router.navigateByUrl('/profil');
    this.isEdition = false;
    this.isOK = false;
    this.isTransaction = true;
    this.msg = 'Recharge Valid??e. Nouveau Solde : ' + this.monSolde;
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
