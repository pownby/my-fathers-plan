import { v4 as uuid } from 'uuid';

import type { AppData } from "./types";
import { SCHEMA_VERSION, TaskProvider, TaskLocation, ExperimentType, KnowledgeType, IngredientType, DetrimentType } from "./constants";

const appData: AppData = {
  version: SCHEMA_VERSION,
  tableau: {
    journal: {
      [KnowledgeType.Chemistry]: 1,
      [KnowledgeType.Biology]: 0,
      [KnowledgeType.Engineering]: 1,
      [KnowledgeType.Arcane]: 2
    },
    ingredients: {
      [IngredientType.Chemical]: 2,
      [IngredientType.Animal]: 2,
      [IngredientType.Gear]: 3,
      [IngredientType.Body]: 1
    },
    knowledge: {
      [KnowledgeType.Biology]: 1,
      [KnowledgeType.Engineering]: 2,
      [KnowledgeType.Arcane]: 1
    },
    experiments: {
      [ExperimentType.A]: 2,
      [ExperimentType.B]: 1
    }
  },
  tasks: [
    {
      id: uuid(),
      name: 'Test Task',
      tier: ExperimentType.A,
      providers: [TaskProvider.Servant],
      location: TaskLocation.Town,
      notes: 'Some notes',
      requirements: {
        [KnowledgeType.Biology]: 3,
        [IngredientType.Animal]: 2
      },
      rewards: {
        [DetrimentType.Creepy]: 1,
        [DetrimentType.Insanity]: 1,
        [KnowledgeType.Biology]: 1,
        [IngredientType.Animal]: 1
      }
    },
    {
      id: uuid(),
      name: 'A cooler task',
      tier: ExperimentType.B,
      providers: [TaskProvider.Caretaker, TaskProvider.Self],
      location: TaskLocation.Estate,
      requirements: {
        [KnowledgeType.Chemistry]: 2,
        [KnowledgeType.Engineering]: 1,
        [IngredientType.Chemical]: 1
      },
      rewards: {
        [DetrimentType.Mob]: 1,
        [DetrimentType.Creepy]: 2,
      }
    }
  ]
};

export default appData;