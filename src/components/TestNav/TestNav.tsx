import React from 'react';
import { Link } from "react-router";

export default function TestNav() {
  return (
    <div>
      Nav to?
      <Link to="/">Main</Link> 
      <Link to="/tasks/1">Task</Link> 
      <Link to="/state">State</Link>
    </div>
  );
}