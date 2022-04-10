import { BoutiqueService } from './../../../service/boutique.service';
import { Boutique } from './../../../entity/boutique';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.css']
})
export class BoutiqueListComponent implements OnInit {
  boutiques: Boutique[]=[];

  constructor(private boutiqueService: BoutiqueService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.boutiqueService.getAll().subscribe((result) => {
      this.boutiques=[];
      for (let e of result){
        this.boutiques.push(
          new Boutique(e.id, e.nom, e.adresse, e.categorie)

        )
      } console.log(result);
    });
 }

    delete(id: number) {
      this.boutiqueService.delete(id).subscribe((ok) => {
        console.log("deleted")
        this.list();
      });
    }
}
