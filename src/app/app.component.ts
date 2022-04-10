import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Poudlard';

  public constructor(private authService: AuthService) {}

  get login() {
    return localStorage.getItem('login');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    localStorage.clear();
  }
}
