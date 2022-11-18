import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'stamina') {
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

export default Ranger;