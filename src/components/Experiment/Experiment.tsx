import React from 'react';

import * as styles from './Experiment.less';
import Asset from '../Asset';
import { ExperimentType } from '../../constants';

const LABEL_MAP = {
  [ExperimentType.A]: 'A',
  [ExperimentType.B]: 'B',
  [ExperimentType.C]: 'C',
  [ExperimentType.D]: 'D'
};

type ExperimentProps = {
  type: ExperimentType,
  label?: string | number,
};

export default function Experiment({ type, label }: ExperimentProps) {
  return (
    <Asset label={label}>
      <span className={styles.experiment}>{LABEL_MAP[type]}</span>
    </Asset>
  );
}