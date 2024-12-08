import React from 'react';

import Resource from '../Resource';
import * as styles from './Knowledge.less';

const TYPE = {
  CHEMISTY: styles.blue,
  BIOLOGY: styles.green,
  ENGINEERING: styles.yellow,
  ARCANE: styles.grey,
};

export default function Knowledge({ type = TYPE.CHEMISTY, label }) {
  return <Resource label={label}>
    <div className={`${styles.cube} ${type}`}></div>
  </Resource>;
}

Knowledge.TYPE = TYPE;