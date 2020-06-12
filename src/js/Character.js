export default class Character {
  constructor() {
    this.damage = 100;
    //this._damage = this.damage;
    //this._damageStoned = this.damage;
  }

  set attack(distance) {
    if (distance > 5) {
      distance = 5;
    }
    this._damage = this.damage;
    this._damage *= 1 - ((distance - 1) / 10);
  }

  get attack() {
    return this._damage;
  }

  set stoned(distance) {
    if (distance > 5) {
      distance = 5;
    }
    this.attack = distance;
    this._damageStoned = this.damage;
    this._damageStoned = this._damage - Math.floor(Math.log2(distance)) * 5;
  }

  get stoned() {
    return this._damageStoned;
  }
}

export class Magician extends Character {

}

export class Daemon extends Character {

}