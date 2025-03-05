import React, { useState, useMemo } from 'react';

import { KnowledgeType, IngredientType, DetrimentType, AssetType } from '../../constants';
import { AssetSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Detriment from '../Detriment';
import RewardsInputRow from './RewardsInputRow';
import * as styles from './RewardsInput.less';
import merge from '../../utils/merge';

type RewardsInputConfigValue = {
  label?: string
  hide?: boolean
};

export type RewardsInputConfig = {
  [AssetType.Knowledge]?: RewardsInputConfigValue
  [AssetType.Ingredient]?: RewardsInputConfigValue
  [AssetType.Detriment]?: RewardsInputConfigValue
};

type RewardsInputProps = {
  onComplete?: (rewards: AssetSet) => any,
  onCancel?: () => any,
  initialValue?: AssetSet,
  config?: RewardsInputConfig
};

const DEFAULT_CONFIG: RewardsInputConfig = {
  [AssetType.Knowledge]: { label: 'Knowledge' },
  [AssetType.Ingredient]: { label: 'Ingredients' },
  [AssetType.Detriment]: { label: 'Others' }
};

export default function RewardsInput({ onComplete, onCancel, initialValue, config = {} }: RewardsInputProps) {
  const [rewards, setRewards] = useState<AssetSet>(initialValue || {});

  const resolvedConfig = useMemo(() => merge(DEFAULT_CONFIG, config), [config]);

  function getOnChange(type: KnowledgeType | IngredientType | DetrimentType) {
    return (value: number) => setRewards({ ...rewards, [type]: value })
  }

  function complete() {
    // filter out 0s to be consistent and reduce data storage
    const entries = Object.entries(rewards || {}).filter(([key, value]) => !!value);
    onComplete?.(Object.fromEntries(entries));
  }

  const {
    [AssetType.Knowledge]: knowledgeConfig,
    [AssetType.Ingredient]: ingredientsConfig,
    [AssetType.Detriment]: detrimentsConfig,
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
      {!!detrimentsConfig && !detrimentsConfig.hide && (
        <div>
          {!!detrimentsConfig.label && (<div>{detrimentsConfig.label}:</div>)}
          <RewardsInputRow value={rewards[DetrimentType.Creepy]} onChange={getOnChange(DetrimentType.Creepy)}>
            <Detriment type={DetrimentType.Creepy} />
          </RewardsInputRow>
          <RewardsInputRow value={rewards[DetrimentType.Insanity]} onChange={getOnChange(DetrimentType.Insanity)}>
            <Detriment type={DetrimentType.Insanity} />
          </RewardsInputRow>
          <RewardsInputRow value={rewards[DetrimentType.Mob]} onChange={getOnChange(DetrimentType.Mob)}>
            <Detriment type={DetrimentType.Mob} />
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