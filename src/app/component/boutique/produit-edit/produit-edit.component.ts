import { Produit } from './../../../entity/produit';
import { ProduitService } from 'src/app/service/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  produit: Produit = new Produit();

  constructor(
    private aR: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.produitService.get(params['id']).subscribe((result) => {
          this.produit = result;
          console.log(result);
        });
      }
    });
  }

  save() {
    if (this.produit.id) {
      this.produitService.update(this.produit).subscribe((result) => {
        this.goList();
      });
    } else {
      this.produitService.create(this.produit).subscribe((result) => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/boutique');
  }
}
