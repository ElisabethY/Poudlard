import { Cours } from './../../../entity/cours';
import { CoursService } from './../../../service/cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrls: ['./cours-edit.component.css']
})
export class CoursEditComponent implements OnInit {
  cours: Cours= new Cours();


  constructor (private aR:ActivatedRoute,
    private coursS: CoursService,
    private router: Router) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      if(params['id']){
       this.coursS.get(params['id']).subscribe((result)=>{
        this.cours=result;
       })
      }
    })
  }
  save() {
    if (this.cours.id) {
      this.coursS.update(this.cours).subscribe(() => {
        this.goList();
      });
    } else {
      this.coursS.create(this.cours).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/cours');
  }
}
