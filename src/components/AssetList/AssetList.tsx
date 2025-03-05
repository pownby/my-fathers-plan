import React from 'react';

import type { KnowledgeSet, IngredientSet, ExperimentSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Experiment from '../Experiment';
import Asset from '../Asset';
import * as styles from './AssetList.less';
import sortAssetsEntries from '../../utils/sortAssetsEntries';
import { AssetType } from '../../constants';

const TYPE_COMPONENT_MAP = new Map<AssetType, ({ type, label }: any) => React.JSX.Element>([
  [AssetType.Knowledge, Knowledge],
  [AssetType.Ingredient, Ingredient],
  [AssetType.Experiment, Experiment]
]);

type AssetListProps = {
  type: AssetType,
  set: KnowledgeSet | IngredientSet | ExperimentSet,
  label?: string,
};

export default function AssetList({ type, set, label }: AssetListProps) {
  if (!set) {
    return null;
  }

  const Component = TYPE_COMPONENT_MAP.get(type);

  const nodes = Object.entries(set)
    .filter(([key, value]) => !!value)
    .sort(sortAssetsEntries)
    .map(([key, value]) => {
      return (!!Component) ? (
        <Component label={value} type={key} key={key} />
      ) : (
        <Asset label={value} key={key}><span className={styles.assetKey}>{key}</span></Asset>
      );
    }
  );

  return (
    <div className={styles.assetList}>
      {label && <div className={styles.assetTitle}>{label}:</div>}
      {nodes.length ? nodes : 'None'}
    </div>
  )
};