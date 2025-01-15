import { KnowledgeType, IngredientType, OtherRewardType } from "../constants";

const ORDER_MAP: Record<string, number> = {
  [KnowledgeType.Chemistry]: 0,
  [KnowledgeType.Biology]: 1,
  [KnowledgeType.Engineering]: 2,
  [KnowledgeType.Arcane]: 3,
  [IngredientType.Chemical]: 4,
  [IngredientType.Animal]: 5,
  [IngredientType.Gear]: 6,
  [IngredientType.Body]: 7,
  [OtherRewardType.Creepy]: 8,
  [OtherRewardType.Insanity]: 9,
  [OtherRewardType.Mob]: 10,
};

export default function sortRewardsEntries([a_key]: [string, number], [b_key]: [string, number]): number {
  return ORDER_MAP[a_key] - ORDER_MAP[b_key];
}