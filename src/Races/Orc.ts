import Race from './Race';

class Orc extends Race {
  private _lifePoints: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
  }

  static createdRacesInstances(): number {
    this._count += 1;
    return this._count;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}

export default Orc;