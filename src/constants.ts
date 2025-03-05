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

export enum ExperimentType {
  A = 'exp_A',
  B = 'exp_B',
  C = 'exp_C',
  D = 'exp_D'
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

export enum DetrimentType {
  Creepy = 'd_creepy',
  Insanity = 'd_insanity',
  Mob = 'd_mob'
};

export enum AssetType {
  Knowledge = 'a_know',
  Ingredient = 'a_ing',
  Experiment = 'a_exp',
  Detriment = 'a_det'
};