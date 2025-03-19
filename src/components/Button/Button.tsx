import React from 'react';
import cx from 'classnames';

import * as styles from './Button.less';

export enum ButtonType {
  PRIMARY = 'primary',
  DANGER = 'danger',
  NEUTRAL = 'neutral'
};

type ButtonProps = {
  children?: React.ReactNode,
  type: ButtonType,
  onClick: () => void,
  className?: string
};

const TYPE_CLASS_MAP = {
  [ButtonType.PRIMARY]: styles.primary,
  [ButtonType.DANGER]: styles.danger,
  [ButtonType.NEUTRAL]: styles.neutral
};

export default function Button({ children, type, onClick, className }: ButtonProps) {
  const fullClassName = cx(styles.button, TYPE_CLASS_MAP[type], className);

  return (
    <button className={fullClassName} onClick={onClick}>{children}</button>
  );
}

Button.TYPE = ButtonType;