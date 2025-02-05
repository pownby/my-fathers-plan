import { TaskProvider, TaskLocation, ExperimentTier, KnowledgeType, IngredientType, OtherRewardType } from "./constants";
import Actions from "./reducer/actions";

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

export type RewardSet = KnowledgeSet & IngredientSet & OtherRewardSet;

export type Task = {
  id: string,
  name?: string,
  tier?: ExperimentTier,
  providers?: TaskProvider[],
  location?: TaskLocation | null,
  notes?: string,
  requirements?: KnowledgeSet & IngredientSet,
  rewards?: RewardSet,
};

export type TableauState = {
  journal?: KnowledgeSet,
  ingredients?: IngredientSet,
  knowledge?: KnowledgeSet,
  experiments?: ExperimentSet
};

export type AppData = {
  version: number,
  tableau?: TableauState,
  tasks?: Task[]
};

export type Action =
  { type: Actions.CLEAR_TASKS } |
  { type: Actions.DELETE_TASK, payload: Task } |
  { type: Actions.MOVE_TASK_DOWN, payload: Task } |
  { type: Actions.MOVE_TASK_UP, payload: Task } |
  { type: Actions.SAVE_TASK, payload: Task } |
  { type: Actions.SET_STATE, payload: AppData } |
  { type: Actions.SET_TABLEAU, payload: TableauState };