import React from 'react';
import Task from './Task';

import './style/task.css';
import './style/listItems.css';

export default ({ selected, tasks, deleteTask }) => {
  return (
    <div className={!selected ? 'visible' : 'hidden'}>
      <ul className='list list-done'>
        {tasks.map((task, i) => (
          <Task
            key={i}
            title={task}
            index={i}
            deleteTask={deleteTask}
            buttonColor='red'
            buttonContent='DELETE'
          />
        ))}
      </ul>
    </div>
  );
};
