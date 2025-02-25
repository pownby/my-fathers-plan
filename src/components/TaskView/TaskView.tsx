import React, { useContext, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from "react-router";
import { v4 as uuid } from 'uuid';

import AppContext from '../../context/AppContext';
import useTask from '../../hooks/useTask';
import { TaskLocation, TaskProvider, RewardsType } from '../../constants';
import * as styles from './TaskView.less';
import Actions from '../../reducer/actions';
import EditRewards from '../EditRewards';

const REQUIREMENTS_CONFIG = {
  [RewardsType.Others]: { hide: true } 
};

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
  const [location, setLocation] = useState(sourceTask?.location || TaskLocation.None);
  const [notes, setNotes] = useState(sourceTask?.notes || '');
  const [requirements, setRequirements] = useState(sourceTask?.requirements);
  const [rewards, setRewards] = useState(sourceTask?.rewards);

  const [editingRewardsFields, setEditingRewardsFields] = useState<string[]>([]);

  const title = `${!!editTask ? 'Edit' : 'Add'} Task`;

  function save() {
    dispatch({
      type: Actions.SAVE_TASK,
      payload: {
        id: editTask?.id || uuid(),
        name,
        providers,
        location: location === TaskLocation.None ? null : location,
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

  function getOnEditStateChange(name: string) {
    return (isEditing: boolean) => {
      if (isEditing) {
        setEditingRewardsFields(Array.from(new Set(editingRewardsFields).add(name)));
      } else {
        setEditingRewardsFields(editingRewardsFields.filter(f => f !== name));
      }
    };
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
          <input type="radio" id="location_na" name="location" value={TaskLocation.None} onChange={onChangeLocation} checked={location === TaskLocation.None} />
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
      <EditRewards
        label="Requirements"
        rewards={requirements}
        onSave={setRequirements}
        onEditStateChange={getOnEditStateChange('requirements')}
        config={REQUIREMENTS_CONFIG}
      />
      <EditRewards
        label="Rewards"
        rewards={rewards}
        onSave={setRewards}
        onEditStateChange={getOnEditStateChange('rewards')}
      />
      {!editingRewardsFields.length && (
        <div className={styles.buttons}>
          <button onClick={save}>Save</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      )}
    </div>
  );
}