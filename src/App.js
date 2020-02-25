import React from 'react';
import Task from './task';

import './App.css';

const toDoArray = [];

function App() {
  return (
    <div className='container'>
      <h1>TO DO:</h1>
      <Task array={toDoArray}></Task>
    </div>
  );
}

export default App;
