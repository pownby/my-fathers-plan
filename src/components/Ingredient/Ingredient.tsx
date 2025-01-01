import React from 'react';

import Resource from '../Resource';
import Icon from '../Icon';
import { IngredientType } from '../../constants';
import * as styles from './Ingredient.less';

const ICON_MAP = {
  [IngredientType.Chemical]: Icon.TYPE.ATOM,
  [IngredientType.Animal]: Icon.TYPE.PAW,
  [IngredientType.Gear]: Icon.TYPE.BOLT,
  [IngredientType.Body]: Icon.TYPE.SKULL
};

type IngredientProps = {
  type: IngredientType,
  label?: string | number,
};

export default function Ingredient({ type = IngredientType.Chemical, label }: IngredientProps) {
  return (
    <Resource label={label}>
      <Icon type={ICON_MAP[type]} className={styles.ingredient} />
    </Resource>
  );
}