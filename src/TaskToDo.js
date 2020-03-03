import React from 'react';

import TaskForm from './TaskForm';
import Task from './Task';

import './style/task.css';

export default ({ selected, tasks, deleteTask, addTaskToList }) => {
  return (
    <div className={selected ? 'visible' : 'hidden'}>
      <TaskForm addTask={addTaskToList}></TaskForm>
      <ul className='list'>
        {tasks.map((task, i) => (
          <Task
            key={i}
            title={task}
            index={i}
            deleteTask={deleteTask}
            buttonColor='green'
            buttonContent='DONE'
          />
        ))}
      </ul>
    </div>
  );
};
