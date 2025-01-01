import React from 'react';

import { KnowledgeSet, IngredientSet, OtherRewardSet } from '../../types';
import { KnowledgeType, IngredientType, OtherRewardType } from '../../constants';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';

import * as styles from './RewardsList.less';

type RewardsListProps = {
  rewards: KnowledgeSet & IngredientSet & OtherRewardSet
};

function isKnowledgeType(type: string) {
  return (Object.values(KnowledgeType) as string[]).includes(type);
}

function isIngredientType(type: string) {
  return (Object.values(IngredientType) as string[]).includes(type);
}

function isOtherRewardType(type: string) {
  return (Object.values(OtherRewardType) as string[]).includes(type);
}

export default function RewardsList({ rewards }: RewardsListProps) {
  const innerNodes = Object.entries(rewards)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => {
      if (isKnowledgeType(key)) {
        return <span>{value}x <Knowledge type={key as KnowledgeType} /></span>;
      } else if (isIngredientType(key)) {
        return <span>{value}x <Ingredient type={key as IngredientType} /></span>;
      }
      return `${value}x ${key}`;
    });

  return (
    <span className={styles.rewardsList}>
      {innerNodes.map((node, i) => (
        <React.Fragment key={i}>
          {node}
          {i + 1 < innerNodes.length ? <span>, </span> : null}
        </React.Fragment>
      ))}
    </span>
  );
}