import { TaskProvider, TaskLocation, ExperimentTier, KnowledgeType, IngredientType, OtherRewardType } from "./constants";

export type KnowledgeSet = {
  [KnowledgeType.Chemistry]?: number,
  [KnowledgeType.Biology]?: number,
  [KnowledgeType.Engineering]?: number,
  [KnowledgeType.Arcane]?: number
};

export type IngredientSet = {
  [IngredientType.Chemical]?: number,
  [IngredientType.Animal]?: number,
  [IngredientType.Gear]?: number,
  [IngredientType.Body]?: number
};

export type ExperimentSet = {
  [ExperimentTier.A]?: number,
  [ExperimentTier.B]?: number,
  [ExperimentTier.C]?: number,
  [ExperimentTier.D]?: number
};

export type OtherRewardSet = {
  [OtherRewardType.Creepy]?: number,
  [OtherRewardType.Insanity]?: number,
  [OtherRewardType.Mob]?: number,

};

export type Task = {
  id: string,
  name?: string,
  tier?: ExperimentTier,
  providers?: TaskProvider[],
  location?: TaskLocation,
  notes?: string,
  requirements?: KnowledgeSet & IngredientSet,
  rewards?: KnowledgeSet & IngredientSet & OtherRewardSet,
}

export type AppData = {
  state?: {
    journal?: KnowledgeSet,
    ingredients?: IngredientSet,
    knowledge?: KnowledgeSet,
    experiments?: ExperimentSet
  },
  tasks?: Task[]
}