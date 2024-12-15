import React from 'react';

import Icon from '../Icon';
import ResourceList from '../ResourceList';
import appData from '../../testData';
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
  const { state = {} } = appData;

  return (
    <div>
      <div className={styles.stateHeader}>
        State: <Icon type={Icon.TYPE.EDIT} onClick={() => console.log('Click edit state')} />
      </div>
      <div className={styles.stateContainer}>
        <ResourceList label="Journal" set={state.journal} type={ResourceList.TYPE.KNOWLEDGE} />
        <ResourceList label="Ingredients" set={state.ingredients} type={ResourceList.TYPE.INGREDIENT} />
        <ResourceList label="Knowledge" set={state.knowledge} type={ResourceList.TYPE.KNOWLEDGE} />
        <ResourceList label="Experiments" set={state.experiments} type={ResourceList.TYPE.EXPERIMENT} />
      </div>
      <TestPalette />
    </div>
  );
}