import React from 'react';

import Resource from '../Resource';

const TYPE = {
  CHEMICAL: 'fa-atom',
  ANIMAL: 'fa-paw',
  GEAR: 'fa-bolt',
  BODY: 'fa-skull',
};

export default function Ingredient({ type = TYPE.CHEMICAL, label }) {
  return <Resource label={label}>
    <i className={`fas ${type}`}></i>
  </Resource>;
}

Ingredient.TYPE = TYPE;