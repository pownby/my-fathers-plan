import React, { useContext, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from "react-router";
import { v4 as uuid } from 'uuid';

import AppContext from '../../context/AppContext';
import useTask from '../../hooks/useTask';
import { TaskLocation, TaskProvider } from '../../constants';
import * as styles from './TaskView.less';
import Actions from '../../reducer/actions';
import Icon from '../Icon';
import RewardsList from '../RewardsList';
import { RewardSet } from '../../types';
import RewardsInput from '../RewardsInput';

const NO_LOCATION = 'none';

export default function TaskView() {
  const { taskId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const copyTask = useTask(searchParams.get('c'));
  const editTask = useTask(taskId);
  const sourceTask = editTask || copyTask;

  const [name, setName] = useState(sourceTask?.name || '');
  const [providers, setProviders] = useState(sourceTask?.providers || []);
  const [location, setLocation] = useState(sourceTask?.location || NO_LOCATION);
  const [notes, setNotes] = useState(sourceTask?.notes || '');
  const [requirements, setRequirements] = useState(sourceTask?.requirements);
  const [rewards, setRewards] = useState(sourceTask?.rewards);

  const [editingRequirements, setEditingRequirements] = useState(false);
  const [editingRewards, setEditingRewards] = useState(false);

  const title = `${!!editTask ? 'Edit' : 'Add'} Task`;

  function save() {
    dispatch({
      type: Actions.SAVE_TASK,
      payload: {
        id: editTask?.id || uuid(),
        name,
        providers,
        location: location === NO_LOCATION ? null : location,
        notes,
        rewards,
        requirements
      }
    });
    navigate('/');
  }

  function onChangeName(e: any) {
    setName(e.target.value);
  }

  function onChangeProvider(e: any) {
    const { value, checked } = e.target;

    if (checked) {
      setProviders([
        ...providers,
        value
      ]);
    } else {
      setProviders(providers.filter(prov => prov !== value));
    }
  }

  function onChangeLocation(e: any) {
    setLocation(e.target.value);
  }

  function onChangeNotes(e: any) {
    setNotes(e.target.value);
  }

  function toggleEditRequirements() {
    setEditingRequirements(!editingRequirements);
  }

  function toggleEditRewards() {
    setEditingRewards(!editingRewards);
  }

  function saveRequirements(newRequirements: RewardSet) {
    setRequirements(newRequirements);
    setEditingRequirements(false);
  }

  function saveRewards(newRewards: RewardSet) {
    setRewards(newRewards);
    setEditingRewards(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskTitle}>{title}</div>
      <div>
        <label>
          Name:
          <input type="text" onChange={onChangeName} value={name} />
        </label>
      </div>
      <div>
        <div>Requires:</div>
        <div>
          <input type="checkbox" id="requires_self" value={TaskProvider.Self} checked={providers.includes(TaskProvider.Self)} onChange={onChangeProvider} />
          <label htmlFor="requires_self">
            {TaskProvider.Self}
          </label>
        </div>
        <div>
          <input type="checkbox" id="requires_servant" value={TaskProvider.Servant} checked={providers.includes(TaskProvider.Servant)} onChange={onChangeProvider} />
          <label htmlFor="requires_servant">
            {TaskProvider.Servant}
          </label>
        </div>
        <div>
          <input type="checkbox" id="requires_caretaker" value={TaskProvider.Caretaker} checked={providers.includes(TaskProvider.Caretaker)} onChange={onChangeProvider} />
          <label htmlFor="requires_caretaker">
            {TaskProvider.Caretaker}
          </label>
        </div>
      </div>
      <div>
        <div>Location:</div>
        <div>
          <input type="radio" id="location_na" name="location" value={NO_LOCATION} onChange={onChangeLocation} checked={location === NO_LOCATION} />
          <label htmlFor="location_na">
            N/A
          </label>
        </div>
        <div>
          <input type="radio" id="location_town" name="location" value={TaskLocation.Town} onChange={onChangeLocation} checked={location === TaskLocation.Town} />
          <label htmlFor="location_town">
            {TaskLocation.Town}
          </label>
        </div>
        <div>
          <input type="radio" id="location_estate" name="location" value={TaskLocation.Estate} onChange={onChangeLocation} checked={location === TaskLocation.Estate} />
          <label htmlFor="location_estate">
            {TaskLocation.Estate}
          </label>
        </div>
      </div>
      <div>
        <label>
          Notes:
          <textarea rows={3} value={notes} onChange={onChangeNotes} />
        </label>
      </div>
      <div>
        Requirements: {!editingRequirements && <Icon type={Icon.TYPE.EDIT} onClick={toggleEditRequirements} />}
        <div className={styles.rewardsList}>
          {!!editingRequirements ? (
            <RewardsInput onComplete={saveRequirements} onCancel={toggleEditRequirements} initialValue={requirements} />
          ) : (
            <RewardsList rewards={requirements} />
          )}
        </div>
      </div>
      <div>
        Rewards: {!editingRewards && <Icon type={Icon.TYPE.EDIT} onClick={toggleEditRewards} />}
        <div className={styles.rewardsList}>
          {!!editingRewards ? (
            <RewardsInput onComplete={saveRewards} onCancel={toggleEditRewards} initialValue={rewards} />
          ) : (
            <RewardsList rewards={rewards} />
          )}
        </div>
      </div>
      {(!editingRequirements && !editingRewards) && (
        <div className={styles.buttons}>
          <button onClick={save}>Save</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      )}
    </div>
  );
}