import React from 'react';

import * as styles from './AssetsInput.less';

type AssetsInputRowProps = {
  children?: React.ReactNode,
  onChange?: (value: number) => any,
  value?: number
};

export default function AssetsInputRow({ children, onChange, value = 0 }: AssetsInputRowProps) {
  function innerOnChange(e: any) {
    onChange(Number(e?.target?.value));
  }

  return (
    <div className={styles.row}>
      {children}
      <input type="number" min="-10" max="10" onChange={innerOnChange} value={value} />
    </div>
  );
}