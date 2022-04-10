import { EvenementService } from './../../../service/evenement.service';
import { Evenement } from './../../../entity/evenement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})

export class EventEditComponent implements OnInit {
event: Evenement= new Evenement();


  constructor (private aR:ActivatedRoute,
    private eventService: EvenementService,
    private router: Router) {}

  ngOnInit(): void {
    this.aR.params.subscribe((params)=>{
      if(params['id']){
       this.eventService.get(params['id']).subscribe((result)=>{
        this.event=result;
       })
      }
    })
  }
  save() {
    if (this.event.id) {
      this.eventService.update(this.event).subscribe(() => {
        this.goList();
      });
    } else {
      this.eventService.create(this.event).subscribe(() => {
        this.goList();
      });
    }
  }

  goList() {
    this.router.navigateByUrl('/evenement');
  }
}
