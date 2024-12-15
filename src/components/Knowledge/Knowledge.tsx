import React from 'react';

import Resource from '../Resource';
import * as styles from './Knowledge.less';

const TYPE: { [key: string]: string } = {
  CHEMISTY: styles.blue,
  BIOLOGY: styles.green,
  ENGINEERING: styles.yellow,
  ARCANE: styles.grey,
};

type KnowledgeProps = {
  type: typeof TYPE[keyof typeof TYPE],
  label?: string | number,
};

export default function Knowledge({ type = TYPE.CHEMISTY, label }: KnowledgeProps) {
  return <Resource label={label}>
    <div className={`${styles.cube} ${type}`}></div>
  </Resource>;
}

Knowledge.TYPE = TYPE;