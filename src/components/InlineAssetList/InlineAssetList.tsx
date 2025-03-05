import React, { useMemo } from 'react';

import { AssetSet } from '../../types';
import { KnowledgeType, IngredientType, DetrimentType } from '../../constants';
import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Detriment from '../Detriment';
import sortAssetsEntries from '../../utils/sortAssetsEntries';

import * as styles from './InlineAssetList.less';

type InlineAssetListProps = {
  assets: AssetSet
};

function isKnowledgeType(type: string) {
  return (Object.values(KnowledgeType) as string[]).includes(type);
}

function isIngredientType(type: string) {
  return (Object.values(IngredientType) as string[]).includes(type);
}

function isDetrimentType(type: string) {
  return (Object.values(DetrimentType) as string[]).includes(type);
}

export default function InlineAssetList({ assets = {} }: InlineAssetListProps) {
  const innerNodes = useMemo(() => Object.entries(assets)
    .filter(([key, value]) => !!value)
    .sort(sortAssetsEntries)
    .map(([key, value]) => {
      if (isKnowledgeType(key)) {
        return <span>{value}x <Knowledge type={key as KnowledgeType} /></span>;
      } else if (isIngredientType(key)) {
        return <span>{value}x <Ingredient type={key as IngredientType} /></span>;
      } else if (isDetrimentType(key)) {
        return <span>{value}x <Detriment type={key as DetrimentType} /></span>
      }
      return `${value}x ${key}`;
    }), [assets]);

  return (
    <span className={styles.inlineAssetList}>
      {!!innerNodes?.length ? innerNodes.map((node, i) => (
        <React.Fragment key={i}>
          {node}
          {i + 1 < innerNodes.length ? <span>, </span> : null}
        </React.Fragment>
      )) : <span>None</span>}
    </span>
  );
}