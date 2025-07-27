import React, { useContext } from 'react';

import * as styles from './EditAssets.less';
import { AssetSet, AssetsModalConfig } from '../../types';
import Icon from '../Icon';
import InlineAssetList from '../InlineAssetList';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';

type AssetsInputConfig = Omit<AssetsModalConfig, "onSubmit" | "assets">;

type EditAssetsProps = {
  label: string,
  assets: AssetSet,
  config?: AssetsInputConfig,
  onSubmit: (assets?: AssetSet) => any
};

export default function EditAssets({ label, assets, onSubmit, config }: EditAssetsProps) {
  const { dispatch } = useContext(AppContext);
  
  function openAssetsModal() {
    dispatch({ type: Actions.OPEN_ASSETS_MODAL, payload: {
      ...config,
      label,
      assets,
      onSubmit
    }});
  }

  return (
    <div>
      {label}: <Icon type={Icon.TYPE.EDIT} onClick={openAssetsModal} />
      <div className={styles.inputArea}>
        <InlineAssetList assets={assets} />
      </div>
    </div>
  );
}