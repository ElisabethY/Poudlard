import { AuthService } from './../../../service/auth.service';
import { BoutiqueService } from './../../../service/boutique.service';
import { Boutique } from './../../../entity/boutique';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.css'],
})
export class BoutiqueListComponent implements OnInit {
  boutiques: Boutique[] = [];

  constructor(
    private boutiqueService: BoutiqueService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.boutiqueService.getAll().subscribe((result) => {
      this.boutiques = [];
      for (let e of result) {
        this.boutiques.push(new Boutique(e.id, e.nom, e.adresse, e.categorie));
      }
    });
  }

  delete(id: number) {
    this.boutiqueService.delete(id).subscribe((ok) => {
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
