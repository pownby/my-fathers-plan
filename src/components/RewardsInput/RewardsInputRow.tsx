import React from 'react';

import * as styles from './RewardsInput.less';

type RewardsInputRowProps = {
  children?: React.ReactNode,
  onChange?: (value: number) => any,
  value?: number
};

export default function RewardsInputRow({ children, onChange, value = 0 }: RewardsInputRowProps) {
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