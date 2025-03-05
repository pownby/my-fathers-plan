import React from 'react';

import * as styles from './Detriment.less';
import Asset from '../Asset';
import { DetrimentType } from '../../constants';
import insanity from '../../../images/insanity.png';
import creepy from '../../../images/creepy.png';
import mob from '../../../images/mob.png';

const IMAGE_MAP = {
  [DetrimentType.Insanity]: insanity,
  [DetrimentType.Creepy]: creepy,
  [DetrimentType.Mob]: mob,
};

type DetrimentProps = {
  type: DetrimentType,
  label?: string | number,
};

export default function Detriment({ type = DetrimentType.Creepy, label }: DetrimentProps) {
  return (
    <Asset label={label}>
      <img className={styles.detrimentImage} src={IMAGE_MAP[type]} />
    </Asset>
  );
}