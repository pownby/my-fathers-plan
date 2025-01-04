import { createContext, Dispatch } from 'react';
import { Action, AppData } from '../types';

type ContextType = {
  dispatch: Dispatch<Action>,
  appState: AppData
};

export default createContext<ContextType>({
  dispatch: () => {},
  appState: {}
});