import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  erreur: boolean = false;
  message: string = '';
  afficher: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private aR: ActivatedRoute
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
    this.authService.authentication(this.login, this.password).subscribe({
      next: (value: string) => {
        //this.password = CryptoJS.MD5(this.password).toString();
        localStorage.setItem('login', this.login);
        localStorage.setItem(
          'token',
          'Basic ' + btoa(this.login + ':' + this.password)
        );
        let jsonObject = JSON.parse(value);

        localStorage.setItem('role', jsonObject.type);
        localStorage.setItem('id', jsonObject.id);
        localStorage.setItem('password', jsonObject.password);
        localStorage.setItem('prenom', jsonObject.prenom);
        localStorage.setItem('nom', jsonObject.nom);
        localStorage.setItem('naissance', jsonObject.naissance);
        localStorage.setItem('solde', jsonObject.solde);
        localStorage.setItem('maison', jsonObject.maison?.nom);
        localStorage.setItem('maisonId', jsonObject.maison?.id);
        localStorage.setItem('score', jsonObject.maison?.score);
        localStorage.setItem('laMaison', jsonObject.maison);
        localStorage.setItem('naissance', jsonObject.naissance);

        this.erreur = false;
        this.router.navigateByUrl('/evenement');
      },
      error: (error: any) => {
        console.log(error);
        this.erreur = true;
        this.message = 'informations incorrectes';
      },
    });
  }

  showHidePassword() {
    this.afficher = !this.afficher;
  }
}
