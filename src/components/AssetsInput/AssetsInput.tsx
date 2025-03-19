import React, { useState, useMemo } from 'react';

import { KnowledgeType, IngredientType, DetrimentType, AssetType, ExperimentType } from '../../constants';
import { AssetSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Detriment from '../Detriment';
import Experiment from '../Experiment';
import AssetsInputRow from './AssetsInputRow';
import * as styles from './AssetsInput.less';
import merge from '../../utils/merge';
import Button from '../Button';

type AssetsInputConfigValue = {
  label?: string
  hide?: boolean
};

export type AssetsInputConfig = {
  [AssetType.Knowledge]?: AssetsInputConfigValue
  [AssetType.Ingredient]?: AssetsInputConfigValue
  [AssetType.Detriment]?: AssetsInputConfigValue
  [AssetType.Experiment]?: AssetsInputConfigValue
};

type AssetsInputProps = {
  onComplete?: (assets: AssetSet) => any,
  onCancel?: () => any,
  initialValue?: AssetSet,
  config?: AssetsInputConfig
};

const DEFAULT_CONFIG: AssetsInputConfig = {
  [AssetType.Knowledge]: { label: 'Knowledge' },
  [AssetType.Ingredient]: { label: 'Ingredients' },
  [AssetType.Detriment]: { label: 'Detriments' },
  [AssetType.Experiment]: { label: 'Experiments' }
};

export default function AssetsInput({ onComplete, onCancel, initialValue, config = {} }: AssetsInputProps) {
  const [assets, setAssets] = useState<AssetSet>(initialValue || {});

  const resolvedConfig = useMemo(() => merge(DEFAULT_CONFIG, config), [config]);

  function getOnChange(type: KnowledgeType | IngredientType | DetrimentType | ExperimentType) {
    return (value: number) => setAssets({ ...assets, [type]: value })
  }

  function complete() {
    // filter out 0s to be consistent and reduce data storage
    const entries = Object.entries(assets || {}).filter(([key, value]) => !!value);
    onComplete?.(Object.fromEntries(entries));
  }

  const {
    [AssetType.Knowledge]: knowledgeConfig,
    [AssetType.Ingredient]: ingredientsConfig,
    [AssetType.Detriment]: detrimentsConfig,
    [AssetType.Experiment]: experimentConfig
  } = resolvedConfig;

  return (
    <div className={styles.container}>
      <div>
        <Button type={Button.TYPE.PRIMARY} onClick={complete}>Save</Button>
        <Button type={Button.TYPE.NEUTRAL} onClick={onCancel}>Cancel</Button>
      </div>
      {!!knowledgeConfig && !knowledgeConfig.hide && (
        <div>
          {!!knowledgeConfig.label && (<div>{knowledgeConfig.label}:</div>)}
          <AssetsInputRow value={assets[KnowledgeType.Chemistry]} onChange={getOnChange(KnowledgeType.Chemistry)}>
            <Knowledge type={KnowledgeType.Chemistry} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[KnowledgeType.Biology]}  onChange={getOnChange(KnowledgeType.Biology)}>
            <Knowledge type={KnowledgeType.Biology} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[KnowledgeType.Engineering]}  onChange={getOnChange(KnowledgeType.Engineering)}>
            <Knowledge type={KnowledgeType.Engineering} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[KnowledgeType.Arcane]}  onChange={getOnChange(KnowledgeType.Arcane)}>
            <Knowledge type={KnowledgeType.Arcane} />
          </AssetsInputRow>
        </div>
      )}
      {!!ingredientsConfig && !ingredientsConfig.hide && (
        <div>
          {!!ingredientsConfig.label && (<div>{ingredientsConfig.label}:</div>)}
          <AssetsInputRow value={assets[IngredientType.Chemical]}  onChange={getOnChange(IngredientType.Chemical)}>
            <Ingredient type={IngredientType.Chemical} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[IngredientType.Animal]} onChange={getOnChange(IngredientType.Animal)}>
            <Ingredient type={IngredientType.Animal} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[IngredientType.Gear]} onChange={getOnChange(IngredientType.Gear)}>
            <Ingredient type={IngredientType.Gear} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[IngredientType.Body]} onChange={getOnChange(IngredientType.Body)}>
            <Ingredient type={IngredientType.Body} />
          </AssetsInputRow>
        </div>
      )}
      {!!detrimentsConfig && !detrimentsConfig.hide && (
        <div>
          {!!detrimentsConfig.label && (<div>{detrimentsConfig.label}:</div>)}
          <AssetsInputRow value={assets[DetrimentType.Creepy]} onChange={getOnChange(DetrimentType.Creepy)}>
            <Detriment type={DetrimentType.Creepy} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[DetrimentType.Insanity]} onChange={getOnChange(DetrimentType.Insanity)}>
            <Detriment type={DetrimentType.Insanity} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[DetrimentType.Mob]} onChange={getOnChange(DetrimentType.Mob)}>
            <Detriment type={DetrimentType.Mob} />
          </AssetsInputRow>
        </div>
      )}
      {!!experimentConfig && !experimentConfig.hide && (
        <div>
          {!!experimentConfig.label && (<div>{experimentConfig.label}:</div>)}
          <AssetsInputRow value={assets[ExperimentType.A]} onChange={getOnChange(ExperimentType.A)}>
            <Experiment type={ExperimentType.A} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[ExperimentType.B]} onChange={getOnChange(ExperimentType.B)}>
            <Experiment type={ExperimentType.B} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[ExperimentType.C]} onChange={getOnChange(ExperimentType.C)}>
            <Experiment type={ExperimentType.C} />
          </AssetsInputRow>
          <AssetsInputRow value={assets[ExperimentType.D]} onChange={getOnChange(ExperimentType.D)}>
            <Experiment type={ExperimentType.D} />
          </AssetsInputRow>
        </div>
      )}
      <div>
        <Button type={Button.TYPE.PRIMARY} onClick={complete}>Save</Button>
        <Button type={Button.TYPE.NEUTRAL} onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}