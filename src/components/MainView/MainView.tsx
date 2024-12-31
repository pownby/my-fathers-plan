import React from 'react';

import Icon from '../Icon';
import ResourceList, { ResourceListType } from '../ResourceList';
import appData from '../../testData';
import TaskList from '../TaskList';
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
  const { state = {}, tasks } = appData;

  return (
    <div>
      <div className={styles.stateHeader}>
        <p className={styles.stateTitle}>State:</p> <Icon type={Icon.TYPE.EDIT} onClick={() => console.log('Click edit state')} />
      </div>
      <div className={styles.stateContainer}>
        <ResourceList label="Journal" set={state.journal} type={ResourceListType.Knowledge} />
        <ResourceList label="Ingredients" set={state.ingredients} type={ResourceListType.Ingredient} />
        <ResourceList label="Knowledge" set={state.knowledge} type={ResourceListType.Knowledge} />
        <ResourceList label="Experiments" set={state.experiments} type={ResourceListType.Experiment} />
      </div>
      <div className={styles.taskContainer}>
        <TaskList tasks={tasks} />
      </div>
      <TestPalette />
    </div>
  );
}