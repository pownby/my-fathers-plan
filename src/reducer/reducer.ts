import Actions from "./actions";
import { AppData, Action } from "../types";

export default function reducer(state: AppData, action: Action): AppData {
  const { type } = action;

  switch (type) {
    case Actions.CLEAR_TASKS: {
      return {
        ...state,
        tasks: []
      };
    }
    case Actions.CLOSE_ASSETS_MODAL: {
      return {
        ...state,
        assetsModalConfig: null
      };
    }
    case Actions.DELETE_TASK: {
      const task = action.payload;
      const tasks = state.tasks || [];
      
      return {
        ...state,
        tasks: tasks.filter(t => t.id !== task.id) || []
      };
    }
    case Actions.MOVE_TASK_UP: {
      const newTask = action.payload;
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
      const newTask = action.payload;
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
    case Actions.OPEN_ASSETS_MODAL: {
      const newConfig = action.payload;
      return {
        ...state,
        assetsModalConfig: newConfig
      };
    }
    case Actions.SAVE_TASK: {
      const newTask = action.payload;
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
        ...action.payload
      };
    }
    case Actions.SET_TABLEAU: {
      return {
        ...state,
        tableau: {
          ...action.payload
        }
      }
    }
  }

  return state;
}