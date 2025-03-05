import React from 'react';

import Asset from '../Asset';
import Icon from '../Icon';
import { IngredientType } from '../../constants';
import * as styles from './Ingredient.less';

const ICON_MAP = {
  [IngredientType.Chemical]: Icon.TYPE.FLASK,
  [IngredientType.Animal]: Icon.TYPE.PAW,
  [IngredientType.Gear]: Icon.TYPE.COG,
  [IngredientType.Body]: Icon.TYPE.SKULL
};

type IngredientProps = {
  type: IngredientType,
  label?: string | number,
};

export default function Ingredient({ type = IngredientType.Chemical, label }: IngredientProps) {
  return (
    <Asset label={label}>
      <Icon type={ICON_MAP[type]} className={styles.ingredient} />
    </Asset>
  );
}