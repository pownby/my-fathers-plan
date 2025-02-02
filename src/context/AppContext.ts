import { createContext, Dispatch } from 'react';
import { Action, AppData } from '../types';
import { SCHEMA_VERSION } from '../constants';

type ContextType = {
  dispatch: Dispatch<Action>,
  appState: AppData
};

export default createContext<ContextType>({
  dispatch: () => {},
  appState: { version: SCHEMA_VERSION }
});