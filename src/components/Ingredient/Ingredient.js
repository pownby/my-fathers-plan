import React from 'react';

import Resource from '../Resource';
import Icon from '../Icon';

const TYPE = {
  CHEMICAL: Icon.TYPE.ATOM,
  ANIMAL: Icon.TYPE.PAW,
  GEAR: Icon.TYPE.BOLT,
  BODY: Icon.TYPE.SKULL
};

export default function Ingredient({ type = TYPE.CHEMICAL, label }) {
  return (
    <Resource label={label}>
      <Icon type={type} />
    </Resource>
  );
}

Ingredient.TYPE = TYPE;