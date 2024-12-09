import React from 'react';

import Knowledge from '../Knowledge';
import Ingredient from '../Ingredient';
import Resource from '../Resource';
import Icon from '../Icon';
import * as styles from './MainView.less';

function TestPalette() {
  return <>
    <div style={{ display: 'flex', gap: '12px', marginTop: 60 }}>
      {Icon.PALETTE}
      <Icon type={Icon.TYPE.PAW} color="#74C0FC" />
    </div>
  </>
}

export default function MainView() {
  return (
    <div>
      <div className={styles.stateHeader}>
        State: <Icon type={Icon.TYPE.EDIT} onClick={() => console.log('Click edit state')} />
      </div>
      <div className={styles.stateContainer}>
        <div className={styles.stateSection}>
          <div>Journal:</div>
          <Knowledge type={Knowledge.TYPE.CHEMISTY} label="2" />
          <Knowledge type={Knowledge.TYPE.ENGINEERING} label="1" />
        </div>
        <div className={styles.stateSection}>
          <div>Resources:</div>
          <Ingredient type={Ingredient.TYPE.CHEMICAL} label="2" />
          <Ingredient type={Ingredient.TYPE.GEAR} label="2" />
        </div>
        <div className={styles.stateSection}>
          <div>Knowledge:</div>
          <Knowledge type={Knowledge.TYPE.CHEMISTY} label="3" />
          <Knowledge type={Knowledge.TYPE.BIOLOGY} label="1" />
          <Knowledge type={Knowledge.TYPE.ARCANE} label="1" />
        </div>
        <div className={styles.stateSection}>
          <div>Experiments:</div>
          <Resource label="1">B</Resource>
          <Resource label="1">C</Resource>
        </div>
      </div>
      <TestPalette />
    </div>
  );
}