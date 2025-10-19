import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent implements OnInit {
  powers = ['Super Sterngth', 'Invisibility', 'Super Speed', 'Time Travel'];
  model = new Hero(0, '', '', '', '');
  constructor() {}

  ngOnInit(): void {}

  submit(heroForm: NgForm) {
    console.log(this.model);
  }
}
