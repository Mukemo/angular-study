import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  private person = {
    name: 'germain',
    age: 30,
    gender: 'male',
  };

  constructor() {}

  public getPerson() {
    return this.person;
  }

  public updatePersonName(name: string) {
    this.person.name = name;
  }
}
