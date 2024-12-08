import React from 'react';

import * as styles from './Resource.less';

export default function Resource({ children, label }) {
  return (
    <div className={styles.container}>
      {children}
      {label && <div className={styles.label}>{label}</div>}
    </div>
  )
}