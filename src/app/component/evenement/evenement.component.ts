import { AuthService } from './../../service/auth.service';
import { EvenementService } from './../../service/evenement.service';
import { Evenement } from './../../entity/evenement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
events: Evenement[]=[];

  constructor(private eventService: EvenementService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.eventService.getAll().subscribe((result) => {
      this.events=[];
      for (let e of result){
        this.events.push(
          new Evenement(e.id, e.nomEven, e.date, e.heure)
        )
      }
    });}

    delete(id: number) {
      this.eventService.delete(id).subscribe((ok) => {
        console.log("deleted")
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
