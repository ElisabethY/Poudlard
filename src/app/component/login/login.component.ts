import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private aR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.aR.queryParams.subscribe((params) => {
      if (params['auth']) {
        this.erreur = true;
        this.message = 'il faut vous identifier pour acceder à cette page';
      }
    });
  }
  check() {
    this.authService.authentication(this.login, this.password).subscribe({
      next: (value: string) => {
        localStorage.setItem('login', this.login);
        localStorage.setItem(
          'token',
          'Basic ' + btoa(this.login + ':' + this.password)
        );
        localStorage.setItem('role', value);
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
}
