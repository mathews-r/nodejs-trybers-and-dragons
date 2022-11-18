import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    this._energyType = energyType;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._count += 1;
    return this._count;
  }
}

export default Necromancer;