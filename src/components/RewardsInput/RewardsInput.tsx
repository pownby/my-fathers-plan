import React, { useState, useMemo } from 'react';

import { KnowledgeType, IngredientType, OtherRewardType, RewardsType } from '../../constants';
import { RewardSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import OtherReward from '../OtherReward';
import RewardsInputRow from './RewardsInputRow';
import * as styles from './RewardsInput.less';
import merge from '../../utils/merge';

type RewardsInputConfigValue = {
  label?: string
  hide?: boolean
};

export type RewardsInputConfig = {
  [RewardsType.Knowledge]?: RewardsInputConfigValue
  [RewardsType.Ingredients]?: RewardsInputConfigValue
  [RewardsType.Others]?: RewardsInputConfigValue
};

type RewardsInputProps = {
  onComplete?: (rewards: RewardSet) => any,
  onCancel?: () => any,
  initialValue?: RewardSet,
  config?: RewardsInputConfig
};

const DEFAULT_CONFIG: RewardsInputConfig = {
  [RewardsType.Knowledge]: { label: 'Knowledge' },
  [RewardsType.Ingredients]: { label: 'Ingredients' },
  [RewardsType.Others]: { label: 'Others' }
};

export default function RewardsInput({ onComplete, onCancel, initialValue, config = {} }: RewardsInputProps) {
  const [rewards, setRewards] = useState<RewardSet>(initialValue || {});

  const resolvedConfig = useMemo(() => merge(DEFAULT_CONFIG, config), [config]);

  function getOnChange(type: KnowledgeType | IngredientType | OtherRewardType) {
    return (value: number) => setRewards({ ...rewards, [type]: value })
  }

  function complete() {
    // filter out 0s to be consistent and reduce data storage
    const entries = Object.entries(rewards || {}).filter(([key, value]) => !!value);
    onComplete?.(Object.fromEntries(entries));
  }

  const {
    [RewardsType.Knowledge]: knowledgeConfig,
    [RewardsType.Ingredients]: ingredientsConfig,
    [RewardsType.Others]: othersConfig,
  } = resolvedConfig;

  return (
    <div className={styles.container}>
      <div>
        <button onClick={complete}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
      {!!knowledgeConfig && !knowledgeConfig.hide && (
        <div>
          {!!knowledgeConfig.label && (<div>{knowledgeConfig.label}:</div>)}
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
      )}
      {!!ingredientsConfig && !ingredientsConfig.hide && (
        <div>
          {!!ingredientsConfig.label && (<div>{ingredientsConfig.label}:</div>)}
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
      )}
      {!!othersConfig && !othersConfig.hide && (
        <div>
          {!!othersConfig.label && (<div>{othersConfig.label}:</div>)}
          <RewardsInputRow value={rewards[OtherRewardType.Creepy]} onChange={getOnChange(OtherRewardType.Creepy)}>
            <OtherReward type={OtherRewardType.Creepy} />
          </RewardsInputRow>
          <RewardsInputRow value={rewards[OtherRewardType.Insanity]} onChange={getOnChange(OtherRewardType.Insanity)}>
            <OtherReward type={OtherRewardType.Insanity} />
          </RewardsInputRow>
          <RewardsInputRow value={rewards[OtherRewardType.Mob]} onChange={getOnChange(OtherRewardType.Mob)}>
            <OtherReward type={OtherRewardType.Mob} />
          </RewardsInputRow>
        </div>
      )}
      <div>
        <button onClick={complete}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}