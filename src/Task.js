import React from 'react';

import './style/task.css';
import './style/listItems.css';

export default ({ title, index, deleteTask, buttonColor, buttonContent }) => (
  <li className='list__items'>
    {title}
    <button
      className={`list__closeButton ${buttonColor}`}
      onClick={() => {
        deleteTask(index);
      }}
    >
      {buttonContent}
    </button>
  </li>
);
