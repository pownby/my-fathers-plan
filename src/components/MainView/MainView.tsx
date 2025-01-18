import React, { useContext } from 'react';
import { useNavigate } from "react-router";

import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import Icon from '../Icon';
import ResourceList, { ResourceListType } from '../ResourceList';
import testData from '../../testData';
import TaskList from '../TaskList';
import * as styles from './MainView.less';

const isDevMode = process.env.NODE_ENV === 'development';

function TestPalette() {
  return <>
    <div style={{ display: 'flex', gap: '12px', marginTop: 60 }}>
      {Icon.PALETTE}
      <Icon type={Icon.TYPE.PAW} color="#74C0FC" />
    </div>
  </>
}

export default function MainView() {
  const {
    dispatch,
    appState: { state = {}, tasks }
  } = useContext(AppContext);

  const navigate = useNavigate();

  function clearAll() {
    dispatch({
      type: Actions.CLEAR_TASKS
    });
  }

  function setTasks() {
    dispatch({
      type: Actions.SET_STATE,
      payload: testData
    });
  }

  return (
    <div>
      {isDevMode && (
        <>
          <div className={styles.stateHeader}>
            <span className={styles.stateTitle}>State:</span> <Icon type={Icon.TYPE.EDIT} onClick={() => console.log('Click edit state')} />
          </div>
          <div className={styles.stateContainer}>
            <ResourceList label="Journal" set={state.journal} type={ResourceListType.Knowledge} />
            <ResourceList label="Ingredients" set={state.ingredients} type={ResourceListType.Ingredient} />
            <ResourceList label="Knowledge" set={state.knowledge} type={ResourceListType.Knowledge} />
            <ResourceList label="Experiments" set={state.experiments} type={ResourceListType.Experiment} />
          </div>
        </>
      )}
      <div className={styles.taskContainer}>
        <div className={styles.taskControls}>
          <button onClick={() => navigate('/tasks')}>Add Task</button>
          {isDevMode && <button onClick={setTasks}>Generate Tasks</button>}
          <button onClick={clearAll}>Clear All</button>
        </div>
        <TaskList tasks={tasks} />
      </div>
      {isDevMode && <TestPalette />}
    </div>
  );
}