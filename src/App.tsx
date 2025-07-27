import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";

import reducer from './reducer/reducer';
import { AppData } from './types';
import { SCHEMA_VERSION, STORAGE_KEY } from './constants';
import * as styles from './App.less';
import MainView from './components/MainView';
import TaskView from './components/TaskView';
import TableauView from './components/TableauView';
import AppContext from './context/AppContext';
import ErrorBoundary from './ErrorBoundary';
import migrateAppData from './utils/migrateAppData';
import AssetsModal from './components/AssetsModal';
import usePersistentStorage from './hooks/usePersistentStorage';

function getInitiateState(): AppData {
  return migrateAppData(JSON.parse(localStorage.getItem(STORAGE_KEY)) || { version: SCHEMA_VERSION });
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, null, getInitiateState);

  usePersistentStorage(state);

  const { assetsModalConfig } = state;

  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <AppContext.Provider value={{ dispatch, appState: state }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="tasks/:taskId?" element={<TaskView />} />
              <Route path="tableau" element={<TableauView />} />
            </Routes>
          </BrowserRouter>
          <AssetsModal config={assetsModalConfig} />
        </AppContext.Provider>
      </ErrorBoundary>
    </div>
  );
}