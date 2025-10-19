export class Hero {
  public age: number;
  public name: string;
  public power: string;
  public password: string;
  public confirm: string;
  constructor(
    age: number,
    name: string,
    power: string,
    password: string,
    confirm: string
  ) {
    this.age = age;
    this.name = name;
    this.power = power;
    this.password = password;
    this.confirm = confirm;
  }
}
