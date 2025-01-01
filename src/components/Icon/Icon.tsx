import React from 'react';
import cx from 'classnames';

import * as styles from './Icon.less';

const TYPE = {
  BARS: 'bars',
  COG: 'cog',
  PAW: 'paw',
  MALE: 'male',
  ATOM: 'atom',
  BOLT: 'bolt',
  DIZZY: 'dizzy',
  SKULL: 'skull',
  EDIT: 'edit',
  COPY: 'copy',
  SORT_UP: 'sort-up',
  SORT_DOWN: 'sort-down',
  ARROW_CIRCLE_UP: 'arrow-circle-up',
  ARROW_CIRCLE_DOWN: 'arrow-circle-down',
  BRAIN: 'brain',
  GRIMACE: 'grimace',
  TIMES: 'times'
  /*
  Does not work (probably need a newer version):
  * wine-bottle
  * skull-crossbones
  * spider
   
  More: https://fontawesome.com/v5/search?q=arrow&o=r&m=free
  */
};

type IconProps = {
  type: typeof TYPE[keyof typeof TYPE],
  color?: string,
  onClick?: () => void
}

export default function Icon({ type, color, onClick }: IconProps) {
  const style = color && { color };
  const className = cx('fas', `fa-${type}`, { [styles.clickable]: !!onClick });
  return <i className={className} style={style} onClick={onClick}></i>;
}

Icon.TYPE = TYPE;

Icon.PALETTE = 
  <>
    <Icon type={TYPE.BARS}></Icon>
    <Icon type={TYPE.COG}></Icon>
    <Icon type={TYPE.PAW}></Icon>
    <Icon type={TYPE.MALE}></Icon>
    <Icon type={TYPE.ATOM}></Icon>
    <Icon type={TYPE.BOLT}></Icon>
    <Icon type={TYPE.DIZZY}></Icon>
    <Icon type={TYPE.SKULL}></Icon>
    <Icon type={TYPE.EDIT}></Icon>
    <Icon type={TYPE.COPY}></Icon>
    <Icon type={TYPE.SORT_UP}></Icon>
    <Icon type={TYPE.SORT_DOWN}></Icon>
    <Icon type={TYPE.ARROW_CIRCLE_UP}></Icon>
    <Icon type={TYPE.ARROW_CIRCLE_DOWN}></Icon>
    <Icon type={TYPE.BRAIN}></Icon>
    <Icon type={TYPE.GRIMACE}></Icon>
    <Icon type={TYPE.TIMES}></Icon>
  </>;