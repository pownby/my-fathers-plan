import React from 'react';
import { useParams } from "react-router";

import TestNav from '../TestNav/TestNav';

export default function TaskView() {
  const { taskId } = useParams();

  return (
    <div>TaskView ({taskId}) <TestNav/></div>
  );
}