export type KnowledgeSet = {
  chem?: number,
  bio?: number,
  eng?: number,
  arc?: number
};

export type IngredientSet = {
  chem?: number,
  anim?: number,
  gear?: number,
  body?: number
};

export type ExperimentSet = {
  A?: number,
  B?: number,
  C?: number,
  D?: number
};

export type TaskProvider = 'caretaker' | 'servant' | 'self';

export type TaskLocation = 'town' | 'estate';

export type TaskTier = 'A' | 'B' | 'C' | 'D';

export type Task = {
  name?: string,
  tier?: TaskTier,
  provider?: TaskProvider,
  location?: TaskLocation,
  notes?: string,
  requirements?: KnowledgeSet & IngredientSet,
  rewards?: KnowledgeSet & IngredientSet,
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