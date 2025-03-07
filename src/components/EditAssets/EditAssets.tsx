import React, { useState } from 'react';

import * as styles from './EditAssets.less';
import { AssetSet } from '../../types';
import Icon from '../Icon';
import AssetsInput, { AssetsInputConfig } from '../AssetsInput';
import InlineAssetList from '../InlineAssetList';

type EditAssetsProps = {
  label: string,
  assets: AssetSet,
  onSave: (newSet: AssetSet) => void,
  onEditStateChange?: (editing: boolean) => void,
  config?: AssetsInputConfig
};

export default function EditAssets({ label, assets, onSave, onEditStateChange, config }: EditAssetsProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  function toggleIsEditing() {
    const newIsEditing = !isEditing;
    setIsEditing(newIsEditing);
    onEditStateChange?.(newIsEditing);
  }

  function onCompleteInput(newSet: AssetSet) {
    onSave(newSet);
    setIsEditing(false);
    onEditStateChange?.(false);
  }

  return (
    <div>
      {label}: {!isEditing && <Icon type={Icon.TYPE.EDIT} onClick={toggleIsEditing} />}
      <div className={styles.inputArea}>
        {!!isEditing ? (
          <AssetsInput onComplete={onCompleteInput} onCancel={toggleIsEditing} initialValue={assets} config={config} />
        ) : (
          <InlineAssetList assets={assets} />
        )}
      </div>
    </div>
  );
}