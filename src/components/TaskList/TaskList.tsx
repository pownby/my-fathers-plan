import React, { useContext } from 'react';
import cx from 'classnames';
import { Link } from "react-router";

import { Task } from '../../types';
import Icon from '../Icon';
import RewardsList from '../RewardsList';
import AppContext from '../../context/AppContext';
import Actions from '../../reducer/actions';
import * as styles from './TaskList.less';

type TaskListProps = {
  tasks?: Task[] 
};

export default function TaskList({ tasks }: TaskListProps) {
  const { dispatch } = useContext(AppContext);

  function getDeleteTask(task: Task) {
    return () => {
      if (window.confirm(`Are you sure you want to delete ${task.name ? task.name : 'this task'}?`)) {
        dispatch({ type: Actions.DELETE_TASK, payload: task });
      }
    }
  }

  return !!tasks?.length && (
    <div className={styles.container}>
      {tasks.map((task, i) => (
        <div key={task.id} className={cx(styles.task, styles[task.location])}>
          {tasks.length > 1 && (
            <div className={styles.movementContainer}>
              {i > 0 && <Icon type={Icon.TYPE.ARROW_CIRCLE_UP} onClick={() => dispatch({ type: Actions.MOVE_TASK_UP, payload: task })}></Icon>}
              {i + 1 < tasks.length && <Icon type={Icon.TYPE.ARROW_CIRCLE_DOWN} onClick={() => dispatch({ type: Actions.MOVE_TASK_DOWN, payload: task })}></Icon>}
            </div>
          )}
          <div className={cx(styles.taskContent)}>
            <div className={styles.name}>
              {task.name}
            </div>
            {!!task.providers?.length && <div>
              Requires: {task.providers?.join(', ')}
            </div>}
            {!!task.location && <div>
              Location: {task.location}
            </div>}
            {!!task.requirements && <div>
              Needs: <RewardsList rewards={task.requirements} />
            </div>}
            {!!task.rewards && <div>
              Gives: <RewardsList rewards={task.rewards} />
            </div>}
            {!!task.notes && <div>
              Notes:
              <div>{task.notes}</div>
            </div>}
          </div>
          <div className={styles.controlsContainer}>
            <Link to={`/tasks/${task.id}`}><Icon type={Icon.TYPE.EDIT} /></Link>
            <Link to={`/tasks?c=${task.id}`}><Icon type={Icon.TYPE.COPY} /></Link>
            <Icon type={Icon.TYPE.TIMES} onClick={getDeleteTask(task)}></Icon>
          </div>
        </div>
      ))}
    </div>
  );
}