import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title = 'Poudlard';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get login() {
    return localStorage.getItem('login');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/connexion');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get role() {
    return localStorage.getItem('role');
  }
  get solde() {
    return localStorage.getItem('solde');
  }
  get nom() {
    return localStorage.getItem('nom');
  }
  get prenom() {
    return localStorage.getItem('prenom');
  }

  get maison() {
    return localStorage.getItem('maison');
  }
}
