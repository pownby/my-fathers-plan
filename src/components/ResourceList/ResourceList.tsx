import React from 'react';

import type { KnowledgeSet, IngredientSet, ExperimentSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Resource from '../Resource';
import * as styles from './ResourceList.less';
import sortRewardsEntries from '../../utils/sortRewardsEntries';

export enum ResourceListType {
  Knowledge,
  Ingredient,
  Experiment
};

const TYPE_COMPONENT_MAP = new Map<ResourceListType, ({ type, label }: any) => React.JSX.Element>([
  [ResourceListType.Knowledge, Knowledge],
  [ResourceListType.Ingredient, Ingredient],
]);

type ResourceListProps = {
  type: ResourceListType,
  set: KnowledgeSet | IngredientSet | ExperimentSet,
  label?: string,
};

export default function ResourceList({ type, set, label }: ResourceListProps) {
  if (!set) {
    return null;
  }

  const Component = TYPE_COMPONENT_MAP.get(type);

  const nodes = Object.entries(set)
    .filter(([key, value]) => !!value)
    .sort(sortRewardsEntries)
    .map(([key, value]) => {
      return (!!Component) ? (
        <Component label={value} type={key} key={key} />
      ) : (
        <Resource label={value} key={key}><span className={styles.resourceKey}>{key}</span></Resource>
      );
    }
  );

  return (
    <div className={styles.resourceList}>
      {label && <div className={styles.resourceTitle}>{label}:</div>}
      {nodes.length ? nodes : 'None'}
    </div>
  )
};