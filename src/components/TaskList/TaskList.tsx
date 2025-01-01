import React from 'react';

import { Task } from '../../types';
import Icon from '../Icon';
import RewardsList from '../RewardsList';
import * as styles from './TaskList.less';

type TaskListProps = {
  tasks?: Task[] 
};

export default function TaskList({ tasks }: TaskListProps) {
  return !!tasks?.length && (
    <div className={styles.container}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          <div className={styles.taskContent}>
            <div className={styles.name}>
              {task.name}
            </div>
            {!!task.providers && <div>
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
          <div className={styles.controls}>
            <Icon type={Icon.TYPE.EDIT} onClick={() => console.log(`Edit ${task.name}`)}></Icon>
            <Icon type={Icon.TYPE.COPY} onClick={() => console.log(`Copy ${task.name}`)}></Icon>
            <Icon type={Icon.TYPE.TIMES} onClick={() => console.log(`Remove ${task.name}`)}></Icon>
          </div>
        </div>
      ))}
    </div>
  );
}