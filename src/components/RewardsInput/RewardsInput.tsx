import React, { useState } from 'react';

import { KnowledgeType, IngredientType, OtherRewardType } from '../../constants';
import { RewardSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import RewardsInputRow from './RewardsInputRow';
import * as styles from './RewardsInput.less';

type RewardsInputProps = {
  onComplete?: (rewards: RewardSet) => any,
  onCancel?: () => any,
  initialValue?: RewardSet
}

export default function RewardsInput({ onComplete, onCancel, initialValue }: RewardsInputProps) {
  const [rewards, setRewards] = useState<RewardSet>(initialValue || {});

  function getOnChange(type: KnowledgeType | IngredientType | OtherRewardType) {
    return (value: number) => setRewards({ ...rewards, [type]: value })
  }

  function complete() {
    // filter out 0s to be consistent and reduce data storage
    const entries = Object.entries(rewards || {}).filter(([key, value]) => !!value);
    onComplete?.(Object.fromEntries(entries));
  }

  return (
    <div className={styles.container}>
      <div>
        <button onClick={complete}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
      <div>
        <div>Knowledge:</div>
        <RewardsInputRow value={rewards[KnowledgeType.Chemistry]} onChange={getOnChange(KnowledgeType.Chemistry)}>
          <Knowledge type={KnowledgeType.Chemistry} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[KnowledgeType.Biology]}  onChange={getOnChange(KnowledgeType.Biology)}>
          <Knowledge type={KnowledgeType.Biology} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[KnowledgeType.Engineering]}  onChange={getOnChange(KnowledgeType.Engineering)}>
          <Knowledge type={KnowledgeType.Engineering} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[KnowledgeType.Arcane]}  onChange={getOnChange(KnowledgeType.Arcane)}>
          <Knowledge type={KnowledgeType.Arcane} />
        </RewardsInputRow>
      </div>
      <div>
        <div>Ingredients:</div>
        <RewardsInputRow value={rewards[IngredientType.Chemical]}  onChange={getOnChange(IngredientType.Chemical)}>
          <Ingredient type={IngredientType.Chemical} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[IngredientType.Animal]} onChange={getOnChange(IngredientType.Animal)}>
          <Ingredient type={IngredientType.Animal} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[IngredientType.Gear]} onChange={getOnChange(IngredientType.Gear)}>
          <Ingredient type={IngredientType.Gear} />
        </RewardsInputRow>
        <RewardsInputRow value={rewards[IngredientType.Body]} onChange={getOnChange(IngredientType.Body)}>
          <Ingredient type={IngredientType.Body} />
        </RewardsInputRow>
      </div>
      <div>
        <div>Others:</div>
        <RewardsInputRow value={rewards[OtherRewardType.Creepy]} onChange={getOnChange(OtherRewardType.Creepy)}>
          {OtherRewardType.Creepy}
        </RewardsInputRow>
        <RewardsInputRow value={rewards[OtherRewardType.Insanity]} onChange={getOnChange(OtherRewardType.Insanity)}>
          {OtherRewardType.Insanity}
        </RewardsInputRow>
        <RewardsInputRow value={rewards[OtherRewardType.Mob]} onChange={getOnChange(OtherRewardType.Mob)}>
          {OtherRewardType.Mob}
        </RewardsInputRow>
      </div>
      <div>
        <button onClick={complete}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}