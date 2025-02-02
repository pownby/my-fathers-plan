import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import debounce from 'lodash.debounce'

import reducer from './reducer/reducer';
import { AppData } from './types';
import { SCHEMA_VERSION } from './constants';
import * as styles from './App.less';
import MainView from './components/MainView';
import TaskView from './components/TaskView';
import StateView from './components/StateView';
import AppContext from './context/AppContext';
import ErrorBoundary from './ErrorBoundary';

const STORAGE_KEY = 'appState';

function getInitiateState(): AppData {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { version: SCHEMA_VERSION };
}

function writeStorage(value: string) {
  localStorage.setItem(STORAGE_KEY, value);
}

const debouncedWriteStorage = debounce(writeStorage, 300);

export default function App() {
  const [state, dispatch] = useReducer(reducer, null, getInitiateState);
  
  useEffect(() => {
    debouncedWriteStorage(JSON.stringify(state));
  }, [state]);

  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <AppContext.Provider value={{ dispatch, appState: state }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="tasks/:taskId?" element={<TaskView />} />
              <Route path="state" element={<StateView />} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </ErrorBoundary>
    </div>
  );
}