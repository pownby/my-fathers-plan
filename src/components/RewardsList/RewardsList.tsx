import React from 'react';

import { KnowledgeSet, IngredientSet, OtherRewardSet } from '../../types';
import * as styles from './RewardsList.less';

type RewardsListProps = {
  rewards: KnowledgeSet & IngredientSet & OtherRewardSet
};

export default function RewardsList({ rewards }: RewardsListProps) {
  const rewardsString = Object.entries(rewards)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => `${value}x ${key}`)
    .join(', ');

  return <div className={styles.rewardsList}>{rewardsString}</div>;
}