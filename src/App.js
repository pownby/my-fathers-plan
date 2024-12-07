import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";

import * as styles from './App.less';
import MainView from './components/MainView';
import TaskView from './components/TaskView';
import StateView from './components/StateView';

export default function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="tasks/:taskId" element={<TaskView />} />
          <Route path="state" element={<StateView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}