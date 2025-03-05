import React from 'react';

import * as styles from './Asset.less';

type AssetProps = {
  children?: React.ReactNode,
  label?: string | number,
};

export default function Asset({ children, label }: AssetProps) {
  return (
    <span className={styles.container}>
      {children}
      {label && <span className={styles.label}>{label}</span>}
    </span>
  )
}