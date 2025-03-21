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
  TIMES: 'times',
  WINE: 'wine-bottle',
  XBONES: 'skull-crossbones',
  SPIDER: 'spider',
  FLASK: 'flask'
  /*
  More: https://fontawesome.com/search?o=r&s=solid
  */
};

type IconProps = {
  type: typeof TYPE[keyof typeof TYPE],
  color?: string,
  onClick?: () => void,
  className?: string
}

export default function Icon({ type, color, onClick, className }: IconProps) {
  const style = color && { color };
  const resolvedClassName = cx('fas', `fa-${type}`, { [styles.clickable]: !!onClick }, className);
  return <i className={resolvedClassName} style={style} onClick={onClick}></i>;
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
    <Icon type={TYPE.WINE}></Icon>
    <Icon type={TYPE.XBONES}></Icon>
    <Icon type={TYPE.SPIDER}></Icon>
    <Icon type={TYPE.FLASK}></Icon>
  </>;