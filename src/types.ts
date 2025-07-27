import { TaskProvider, TaskLocation, ExperimentType, KnowledgeType, IngredientType, DetrimentType, AssetType } from "./constants";
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
  [ExperimentType.A]?: number,
  [ExperimentType.B]?: number,
  [ExperimentType.C]?: number,
  [ExperimentType.D]?: number
};

export type DetrimentSet = {
  [DetrimentType.Creepy]?: number,
  [DetrimentType.Insanity]?: number,
  [DetrimentType.Mob]?: number,
};

export type AssetSet = KnowledgeSet & IngredientSet & DetrimentSet & ExperimentSet;

export type Task = {
  id: string,
  name?: string,
  tier?: ExperimentType,
  providers?: TaskProvider[],
  location?: TaskLocation | null,
  notes?: string,
  requirements?: KnowledgeSet & IngredientSet,
  rewards?: KnowledgeSet & IngredientSet & DetrimentSet,
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
  tasks?: Task[],
  assetsModalConfig?: AssetsModalConfig
}

export type PersistentData = Pick<AppData, "version" | "tableau" | "tasks">;

export type Action =
  { type: Actions.CLEAR_TASKS } |
  { type: Actions.CLOSE_ASSETS_MODAL } |
  { type: Actions.DELETE_TASK, payload: Task } |
  { type: Actions.MOVE_TASK_DOWN, payload: Task } |
  { type: Actions.MOVE_TASK_UP, payload: Task } |
  { type: Actions.OPEN_ASSETS_MODAL, payload: AssetsModalConfig } |
  { type: Actions.SAVE_TASK, payload: Task } |
  { type: Actions.SET_STATE, payload: AppData } |
  { type: Actions.SET_TABLEAU, payload: TableauState };

type AssetsModalConfigValue = {
  label?: string
  hide?: boolean
};

export type AssetsModalConfig = {
  [AssetType.Knowledge]?: AssetsModalConfigValue
  [AssetType.Ingredient]?: AssetsModalConfigValue
  [AssetType.Detriment]?: AssetsModalConfigValue
  [AssetType.Experiment]?: AssetsModalConfigValue,
  label?: string,
  assets?: AssetSet,
  onSubmit: (assets?: AssetSet) => any
};