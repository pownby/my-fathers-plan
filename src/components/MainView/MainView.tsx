import React, { useContext } from 'react';
import { useNavigate } from "react-router";

import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import Icon from '../Icon';
import AssetList from '../AssetList';
import testData from '../../testData';
import TaskList from '../TaskList';
import * as styles from './MainView.less';
import { AssetType } from '../../constants';
import Button from '../Button';

const isDevMode = process.env.NODE_ENV === 'development';

function TestPalette() {
  return <>
    <div style={{ display: 'flex', gap: '12px', marginTop: 60, overflowX: 'auto' }}>
      {Icon.PALETTE}
      <Icon type={Icon.TYPE.PAW} color="#74C0FC" />
    </div>
  </>
}

export default function MainView() {
  const {
    dispatch,
    appState: { tableau = {}, tasks }
  } = useContext(AppContext);

  const navigate = useNavigate();

  function clearAll() {
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      dispatch({ type: Actions.CLEAR_TASKS });
    }
  }

  function setTasks() {
    dispatch({
      type: Actions.SET_STATE,
      payload: testData
    });
  }

  return (
    <div>
      <div className={styles.tableauHeader}>
        <span className={styles.tableauTitle}>Tableau:</span> <Icon type={Icon.TYPE.EDIT} onClick={() => navigate('/tableau')} />
      </div>
      <div className={styles.tableauContainer}>
        <AssetList label="Journal" set={tableau.journal} type={AssetType.Knowledge} />
        <AssetList label="Ingredients" set={tableau.ingredients} type={AssetType.Ingredient} />
        <AssetList label="Knowledge" set={tableau.knowledge} type={AssetType.Knowledge} />
        <AssetList label="Experiments" set={tableau.experiments} type={AssetType.Experiment} />
      </div>
      <div className={styles.taskContainer}>
        <div className={styles.taskControls}>
          <Button type={Button.TYPE.NEUTRAL} onClick={() => navigate('/tasks')}>Add Task</Button>
          {isDevMode && <button onClick={setTasks}>Generate Tasks</button>}
          {!!tasks?.length && <Button type={Button.TYPE.DANGER} onClick={clearAll}>Clear All</Button>}
        </div>
        <TaskList tasks={tasks} />
      </div>
      {isDevMode && <TestPalette />}
    </div>
  );
}