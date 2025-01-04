import Actions from "./actions";
import { AppData, Action, Task } from "../types";

export default function reducer(state: AppData, action: Action): AppData {
  const { type, payload = {} } = action;

  switch (type) {
    case Actions.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          payload as Task
        ]
      }
    case Actions.CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      };
    case Actions.SET_STATE:
      return {
        ...payload
      };
  }

  return state;
}