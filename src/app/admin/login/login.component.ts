import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private welcomeService: WelcomeService) {}
  ngOnInit(): void {}

  getPerson() {
    return this.welcomeService.getPerson();
  }

  updateName() {
    this.welcomeService.updatePersonName('John Smith');
  }
}
