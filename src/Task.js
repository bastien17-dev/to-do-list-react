import React from 'react';

import './style/listItems.css';

export default ({ title, index, deleteTask }) => (
  <li className='list__items'>
    {title}
    <button
      className='list__closeButton'
      onClick={() => {
        deleteTask(index);
      }}
    >
      DONE
    </button>
  </li>
);
