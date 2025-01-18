import Actions from "./actions";
import { AppData, Action, Task } from "../types";

export default function reducer(state: AppData, action: Action): AppData {
  const { type, payload = {} } = action;

  switch (type) {
    case Actions.CLEAR_TASKS: {
      return {
        ...state,
        tasks: []
      };
    }
    case Actions.MOVE_TASK_UP: {
      const newTask = payload as Task;
      const taskIndex = state.tasks.findIndex((t) => t.id === newTask.id);
      if (taskIndex > 0) {
        const newTasks = state.tasks.slice(0);
        const task = newTasks[taskIndex];

        newTasks.splice(taskIndex, 1);
        newTasks.splice(taskIndex - 1, 0, task);

        return {
          ...state,
          tasks: newTasks
        };
      }
      return state;
    }
    case Actions.MOVE_TASK_DOWN: {
      const newTask = payload as Task;
      const taskIndex = state.tasks.findIndex((t) => t.id === newTask.id);
      if (taskIndex < state.tasks.length - 1) {
        const newTasks = state.tasks.slice(0);
        const task = newTasks[taskIndex];

        newTasks.splice(taskIndex, 1);
        newTasks.splice(taskIndex + 1, 0, task);

        return {
          ...state,
          tasks: newTasks
        };
      }
      return state;
    }
    case Actions.SAVE_TASK: {
      const newTask = payload as Task;
      const taskIndex = state.tasks.findIndex((t) => t.id === newTask.id);
      
      let newTasks;
      if (taskIndex === -1) {
        newTasks = [
          ...state.tasks,
          newTask
        ];
      } else {
        newTasks = state.tasks.slice(0);
        newTasks.splice(taskIndex, 1, newTask);
      }
     
      return {
        ...state,
        tasks: newTasks
      };
    }
    case Actions.SET_STATE: {
      return {
        ...payload
      };
    }
  }

  return state;
}