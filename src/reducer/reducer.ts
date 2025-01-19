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
    case Actions.DELETE_TASK: {
      const task = payload as Task;
      const tasks = state.tasks || [];
      
      return {
        ...state,
        tasks: tasks.filter(t => t.id !== task.id) || []
      };
    }
    case Actions.MOVE_TASK_UP: {
      const newTask = payload as Task;
      const tasks = state.tasks || [];
      const taskIndex = tasks.findIndex((t) => t.id === newTask.id);
      if (taskIndex > 0) {
        const newTasks = tasks.slice(0);
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
      const tasks = state.tasks || [];
      const taskIndex = tasks.findIndex((t) => t.id === newTask.id);
      if (taskIndex < tasks.length - 1 && taskIndex > -1) {
        const newTasks = tasks.slice(0);
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
      const tasks = state.tasks || [];
      const taskIndex = tasks.findIndex((t) => t.id === newTask.id);
      
      let newTasks;
      if (taskIndex === -1) {
        newTasks = [
          ...tasks,
          newTask
        ];
      } else {
        newTasks = tasks.slice(0);
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