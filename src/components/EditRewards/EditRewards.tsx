import React, { useState } from 'react';

import * as styles from './EditRewards.less';
import { RewardSet } from '../../types';
import Icon from '../Icon';
import RewardsInput, { RewardsInputConfig } from '../RewardsInput';
import RewardsList from '../RewardsList';

type EditRewardsProps = {
  label: string,
  rewards: RewardSet,
  onSave: (newSet: RewardSet) => void,
  onEditStateChange?: (editing: boolean) => void,
  config?: RewardsInputConfig
};

export default function EditRewards({ label, rewards, onSave, onEditStateChange, config }: EditRewardsProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  function toggleIsEditing() {
    const newIsEditing = !isEditing;
    setIsEditing(newIsEditing);
    onEditStateChange?.(newIsEditing);
  }

  function onCompleteInput(newSet: RewardSet) {
    onSave(newSet);
    setIsEditing(false);
    onEditStateChange?.(false);
  }

  return (
    <div>
      {label}: {!isEditing && <Icon type={Icon.TYPE.EDIT} onClick={toggleIsEditing} />}
      <div className={styles.inputArea}>
        {!!isEditing ? (
          <RewardsInput onComplete={onCompleteInput} onCancel={toggleIsEditing} initialValue={rewards} config={config} />
        ) : (
          <RewardsList rewards={rewards} />
        )}
      </div>
    </div>
  );
}