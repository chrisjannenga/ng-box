import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  authenticated = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.authenticated = authStatus;
    });
  }
}
