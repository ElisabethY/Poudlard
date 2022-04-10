import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from './../../../service/maison.service';
import { Maison } from './../../../entity/maison';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maison-edit',
  templateUrl: './maison-edit.component.html',
  styleUrls: ['./maison-edit.component.css']
})
export class MaisonEditComponent implements OnInit {
  maison: Maison= new Maison();


  constructor (private aR:ActivatedRoute,
    private maisonService: MaisonService,
    private router: Router) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      if(params['id']){
       this.maisonService.get(params['id']).subscribe((result)=>{
        this.maison=result;
       })
      }
    })
  }
  save() {
    if (this.maison.id) {
      this.maisonService.update(this.maison).subscribe(() => {
        this.goList();
      });
    } else {
      this.maisonService.create(this.maison).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/maison');
  }
}
