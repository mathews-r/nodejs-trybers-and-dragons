export type EnergyType = {
  mana: string;
  stamina: string;
};

export default interface Energy {
  type: EnergyType;
  amount: number;
}