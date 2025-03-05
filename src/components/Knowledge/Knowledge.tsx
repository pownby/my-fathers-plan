import React from 'react';

import Asset from '../Asset';
import * as styles from './Knowledge.less';
import { KnowledgeType } from '../../constants';

const COLOR_MAP = {
  [KnowledgeType.Chemistry]: styles.blue,
  [KnowledgeType.Biology]: styles.green,
  [KnowledgeType.Engineering]: styles.yellow,
  [KnowledgeType.Arcane]: styles.grey,
};

type KnowledgeProps = {
  type: KnowledgeType,
  label?: string | number,
};

export default function Knowledge({ type = KnowledgeType.Chemistry, label }: KnowledgeProps) {
  return <Asset label={label}>
    <span className={`${styles.cube} ${COLOR_MAP[type]}`}></span>
  </Asset>;
}