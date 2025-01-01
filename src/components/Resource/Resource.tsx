import React from 'react';

import * as styles from './Resource.less';

type ResourceProps = {
  children?: React.ReactNode,
  label?: string | number,
};

export default function Resource({ children, label }: ResourceProps) {
  return (
    <span className={styles.container}>
      {children}
      {label && <span className={styles.label}>{label}</span>}
    </span>
  )
}