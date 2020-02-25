import React from 'react';
import Tasks from './task';

import './App.css';

const toDoArray = ['Range ta chambre', 'faire les courses'];

function App() {
  return (
    <div className='container'>
      <h1>TO DO:</h1>
      <Tasks array={toDoArray}></Tasks>
    </div>
  );
}

export default App;
