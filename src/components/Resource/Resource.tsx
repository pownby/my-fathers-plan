import React from 'react';

import * as styles from './Resource.less';

type ResourceProps = {
  children?: React.ReactNode,
  label?: string,
};

export default function Resource({ children, label }: ResourceProps) {
  return (
    <div className={styles.container}>
      {children}
      {label && <div className={styles.label}>{label}</div>}
    </div>
  )
}