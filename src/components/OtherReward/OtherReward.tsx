import React from 'react';

import * as styles from './OtherReward.less';
import Resource from '../Resource';
import { OtherRewardType } from '../../constants';
import insanity from '../../../images/insanity.png';
import creepy from '../../../images/creepy.png';
import mob from '../../../images/mob.png';

const IMAGE_MAP = {
  [OtherRewardType.Insanity]: insanity,
  [OtherRewardType.Creepy]: creepy,
  [OtherRewardType.Mob]: mob,
};

type OtherRewardProps = {
  type: OtherRewardType,
  label?: string | number,
};

export default function OtherReward({ type = OtherRewardType.Creepy, label }: OtherRewardProps) {
  return (
    <Resource label={label}>
      <img className={styles.otherRewardImage} src={IMAGE_MAP[type]} />
    </Resource>
  );
}