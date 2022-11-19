import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monster: Monster[];

  constructor(character: Fighter, monster: Monster[]) {
    super(character);
    this._monster = monster;
  }

  fight(): number {
    while (this.player.lifePoints !== -1) {
      this.player.attack(this._monster[0]);
      this._monster[0].attack(this.player);
      if (this.player.lifePoints === -1) {
        break;
      } 
    }
    return super.fight();
  }
}