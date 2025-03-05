import { KnowledgeType, IngredientType, DetrimentType, ExperimentType } from "../constants";

const ORDER_MAP: Record<string, number> = {
  [KnowledgeType.Chemistry]: 0,
  [KnowledgeType.Biology]: 1,
  [KnowledgeType.Engineering]: 2,
  [KnowledgeType.Arcane]: 3,
  [IngredientType.Chemical]: 4,
  [IngredientType.Animal]: 5,
  [IngredientType.Gear]: 6,
  [IngredientType.Body]: 7,
  [DetrimentType.Creepy]: 8,
  [DetrimentType.Insanity]: 9,
  [DetrimentType.Mob]: 10,
  [ExperimentType.A]: 11,
  [ExperimentType.B]: 12,
  [ExperimentType.C]: 13
};

export default function sortAssetsEntries([a_key]: [string, number], [b_key]: [string, number]): number {
  return ORDER_MAP[a_key] - ORDER_MAP[b_key];
}