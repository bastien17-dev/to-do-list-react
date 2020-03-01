import React from 'react';

function ButtonReset({ onClick }) {
  return (
    <button
      className='taskForm__button taskForm__button--reset'
      onClick={() => onClick()}
    >
      Reset All Tasks
    </button>
  );
}

export default ButtonReset;
