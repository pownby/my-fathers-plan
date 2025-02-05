import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router";

import { RewardSet } from '../../types';
import * as styles from './TableauView.less';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import Icon from '../Icon';
import RewardsInput from '../RewardsInput';
import RewardsList from '../RewardsList';

export default function TableauView() {
  const { dispatch, appState: { tableau: appState } } = useContext(AppContext);
  const navigate = useNavigate();

  const [journal, setJournal] = useState(appState?.journal);
  
  const [editingJournal, setEditingJournal] = useState(false);

  function save() {
    dispatch({
      type: Actions.SET_TABLEAU,
      payload: {
        journal
      }
    });
    navigate('/');
  }

  function toggleEditJournal() {
    setEditingJournal(!editingJournal);
  }

  function saveJournal(newJournal: RewardSet) {
    setJournal(newJournal);
    setEditingJournal(false);
  }
  
  return (
      <div className={styles.container}>
        <div className={styles.tableauTitle}>Tableau</div>
        <div>
          Journal: {!editingJournal && <Icon type={Icon.TYPE.EDIT} onClick={toggleEditJournal} />}
          <div className={styles.inputArea}>
            {!!editingJournal ? (
              <RewardsInput onComplete={saveJournal} onCancel={toggleEditJournal} initialValue={journal} />
            ) : (
              <RewardsList rewards={journal} />
            )}
          </div>
        </div>
        {!editingJournal && (
          <div className={styles.buttons}>
            <button onClick={save}>Save</button>
            <button onClick={() => navigate('/')}>Cancel</button>
          </div>
        )}
      </div>
    );
}