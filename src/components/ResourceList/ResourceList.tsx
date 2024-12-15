import React from 'react';

import type { KnowledgeSet, IngredientSet, ExperimentSet } from '../../types';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Resource from '../Resource';
import * as styles from './ResourceList.less';

const TYPE: { [key: string]: string } = {
  KNOWLEDGE: 'knowledge',
  INGREDIENT: 'ingredient',
  EXPERIMENT: 'experiment'
};

const TYPE_COMPONENT_MAP = {
  [TYPE.KNOWLEDGE]: Knowledge,
  [TYPE.INGREDIENT]: Ingredient
};

const PROP_TYPE_MAP: { [key: string]: { [key: string]: string } } = {
  [TYPE.KNOWLEDGE]: {
    'chem': Knowledge.TYPE.CHEMISTY,
    'bio': Knowledge.TYPE.BIOLOGY,
    'eng': Knowledge.TYPE.ENGINEERING,
    'arc': Knowledge.TYPE.ARCANE
  },
  [TYPE.INGREDIENT]: {
    'chem': Ingredient.TYPE.CHEMICAL,
    'anim': Ingredient.TYPE.ANIMAL,
    'gear': Ingredient.TYPE.GEAR,
    'body': Ingredient.TYPE.BODY
  }
};

type ResourceListProps = {
  type: typeof TYPE[keyof typeof TYPE],
  set: KnowledgeSet | IngredientSet | ExperimentSet,
  label?: string,
};

export default function ResourceList({ type, set, label }: ResourceListProps) {
  const Component = TYPE_COMPONENT_MAP[type];
  const typeMap = PROP_TYPE_MAP[type];

  const nodes = Object.entries(set).filter(([key, value]) => !!value).map(([key, value]) => {
    return (!!Component && !!typeMap) ? (
      <Component label={value} type={typeMap[key]} key={key} />
    ) : (
      <Resource label={value} key={key}>{key}</Resource>
    );
  });

  return (
    <div className={styles.resourceList}>
      {label && <div>{label}:</div>}
      {nodes.length ? nodes : 'None'}
    </div>
  )
};

ResourceList.TYPE = TYPE;