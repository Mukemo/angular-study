import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  @Input() name!: string;
  loginStatus: boolean = false;
  isLoggedInClass = 'is-logged-in';
  states = [
    'Florida',
    'California',
    'Texas',
    'New York',
    'Washington',
    'Nevada',
    'Ohio',
    'Michigan',
    'Illinois',
    'Virginia',
    'North Carolina',
    'New Jersey',
    'Massachusetts',
    'Arizona',
    'Tennessee',
    'Indiana',
    'Missouri',
    'Maryland',
    'Wisconsin',
    'Minnesota',
  ];

  carColor: string = '';

  cars = [
    {
      name: 'Honda',
      color: 'Black',
      purcgased: new Date('2020-01-01'),
    },
    {
      name: 'Toyota',
      color: 'White',
      purcgased: new Date('2021-05-15'),
    },
    {
      name: 'Ford',
      color: 'Blue',
      purcgased: new Date('2019-11-20'),
    },
    {
      name: 'Chevrolet',
      color: 'Red',
      purcgased: new Date('2022-03-10'),
    },
  ];
  constructor(
    private renderer: Renderer2,
    private welocmeService: WelcomeService
  ) {}

  ngOnInit(): void {
    this.setUppercase();
    // console.log('Name:' + this.name);
    // const element = document.getElementById('is-logged-in');
    // this.renderer.addClass(element, this.isLoggedInClass);
  }

  addCar() {
    this.cars.push({
      name: 'Nissan',
      color: 'Blue',
      purcgased: new Date('2023-06-01'),
    });
  }
  isLogin() {
    return this.loginStatus;
  }

  toggleLogin() {
    this.loginStatus = !this.loginStatus;
  }

  setUppercase() {
    this.name = this.name.toUpperCase();
  }

  displayName() {
    alert('Welcome ' + this.name);
  }

  getName() {
    return this.name;
  }

  updateName(event: Event) {
    // this.name = (event.target as HTMLInputElement).value;
    const element = <HTMLInputElement>event.target;
    this.name = element.value;
  }

  getPerson() {
    return this.welocmeService.getPerson();
  }
}
