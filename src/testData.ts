import type { AppData } from "./types";
import { TaskProvider, TaskLocation, ExperimentTier, KnowledgeType, IngredientType, OtherRewardType } from "./constants";

const appData: AppData = {
  state: {
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
      [ExperimentTier.A]: 2,
      [ExperimentTier.B]: 1
    }
  },
  tasks: [
    {
      id: 0,
      name: 'Test Task',
      tier: ExperimentTier.A,
      providers: [TaskProvider.Servant],
      location: TaskLocation.Town,
      notes: 'Some notes',
      requirements: {
        [KnowledgeType.Biology]: 3,
        [IngredientType.Animal]: 2
      },
      rewards: {
        [OtherRewardType.VP]: 3,
        [OtherRewardType.Creepy]: 1,
        [OtherRewardType.Insanity]: 1,
        [KnowledgeType.Biology]: 1
      }
    },
    {
      id: 1,
      name: 'A cooler task',
      tier: ExperimentTier.B,
      providers: [TaskProvider.Caretaker, TaskProvider.Self],
      location: TaskLocation.Estate,
      requirements: {
        [KnowledgeType.Chemistry]: 2,
        [KnowledgeType.Engineering]: 1,
        [IngredientType.Chemical]: 1
      },
      rewards: {
        [OtherRewardType.VP]: 4,
        [OtherRewardType.Mob]: 1,
        [OtherRewardType.Creepy]: 2,
      }
    }
  ]
};

export default appData;