import { Prof } from './../../../../../entity/prof';
import { ProfService } from './../../../../../service/prof.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.css']
})
export class ProfEditComponent implements OnInit {
  prof: Prof= new Prof();


  constructor (private aR:ActivatedRoute,
    private ProfService: ProfService,
    private router: Router) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      if(params['id']){
       this.ProfService.get(params['id']).subscribe((result)=>{
        this.prof=result;
       })
      }
    })
  }
  save() {
    if (this.prof.id) {
      this.ProfService.update(this.prof).subscribe(() => {
        this.goList();
      });
    } else {
      this.ProfService.create(this.prof).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/compte/professeurs');
  }
}
