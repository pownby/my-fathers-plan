export const SCHEMA_VERSION = 1;

export enum TaskProvider {
  Caretaker = 'Caretaker',
  Servant = 'Servant',
  Self = 'Self'
};

export enum TaskLocation {
  None = 'None',
  Town = 'Town',
  Estate = 'Estate'
};

export enum ExperimentTier {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
};

export enum IngredientType {
  Chemical = 'i_chem',
  Animal = 'i_anim',
  Gear = 'i_gear',
  Body = 'i_body'
};

export enum KnowledgeType {
  Chemistry = 'k_chem',
  Biology = 'k_bio',
  Engineering = 'k_eng',
  Arcane = 'k_arc'
};

export enum OtherRewardType {
  Creepy = 'o_creepy',
  Insanity = 'o_insanity',
  Mob = 'o_mob'
};

export enum RewardsType {
  Knowledge,
  Ingredients,
  Others
};