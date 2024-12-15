import React from 'react';

import Resource from '../Resource';
import Icon from '../Icon';

const TYPE: { [key: string]: string } = {
  CHEMICAL: Icon.TYPE.ATOM,
  ANIMAL: Icon.TYPE.PAW,
  GEAR: Icon.TYPE.BOLT,
  BODY: Icon.TYPE.SKULL
};

type IngredientProps = {
  type: typeof TYPE[keyof typeof TYPE],
  label?: string | number,
};

export default function Ingredient({ type = TYPE.CHEMICAL, label }: IngredientProps) {
  return (
    <Resource label={label}>
      <Icon type={type} />
    </Resource>
  );
}

Ingredient.TYPE = TYPE;