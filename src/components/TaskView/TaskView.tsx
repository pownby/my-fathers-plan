import React, { useContext, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from "react-router";
import { v4 as uuid } from 'uuid';

import AppContext from '../../context/AppContext';
import useTask from '../../hooks/useTask';
import { TaskLocation, TaskProvider } from '../../constants';
import * as styles from './TaskView.less';
import Actions from '../../reducer/actions';

export default function TaskView() {
  const { taskId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const copyTask = useTask(searchParams.get('c'));
  const editTask = useTask(taskId);
  const sourceTask = editTask || copyTask;

  const [name, setName] = useState(sourceTask?.name);
  const [providers, setProviders] = useState(sourceTask?.providers);
  const [location, setLocation] = useState(sourceTask?.location);
  const [notes, setNotes] = useState(sourceTask?.notes);
  const [requirements, setRequirements] = useState(sourceTask?.requirements);
  const [rewards, setRewards] = useState(sourceTask?.rewards);

  const title = `${!!editTask ? 'Edit' : 'Add'} Task`;

  function save() {
    const isEditing = !!editTask;
    dispatch({
      type: Actions.SAVE_TASK,
      payload: {
        id: editTask?.id || uuid(),
        name
      }
    })
    navigate('/');
  }

  function onChangeName(e: any) {
    setName(e.target.value);
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
          <input type="checkbox" id="requires_self" value={TaskProvider.Self} />
          <label htmlFor="requires_self">
            {TaskProvider.Self}
          </label>
        </div>
        <div>
          <input type="checkbox" id="requires_servant" value={TaskProvider.Servant} />
          <label htmlFor="requires_servant">
            {TaskProvider.Servant}
          </label>
        </div>
        <div>
          <input type="checkbox" id="requires_caretaker" value={TaskProvider.Caretaker} />
          <label htmlFor="requires_caretaker">
            {TaskProvider.Caretaker}
          </label>
        </div>
      </div>
      <div>
        <div>Location:</div>
        <div>
          <input type="radio" id="location_na" name="location" value="none" defaultChecked />
          <label htmlFor="location_na">
            N/A
          </label>
        </div>
        <div>
          <input type="radio" id="location_town" name="location" value={TaskLocation.Town} />
          <label htmlFor="location_town">
            {TaskLocation.Town}
          </label>
        </div>
        <div>
          <input type="radio" id="location_estate" name="location" value={TaskLocation.Estate} />
          <label htmlFor="location_estate">
            {TaskLocation.Estate}
          </label>
        </div>
      </div>
      <div>
        <label>
          Notes:
          <textarea rows={3} />
        </label>
      </div>
      <div>Requirements:</div>
      <div>Rewards:</div>
      <div className={styles.buttons}>
        <button onClick={save}>Save</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
}