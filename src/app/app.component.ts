import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  myName = 'John Doe';

  id = 5;

  constructor(private router: Router) {}
  ngOnInit(): void {}
  getName() {
    return this.myName;
  }

  routeToAbout() {
    this.router.navigate(['/about', { queryParams: { name: 'John' } }]);
  }
}
