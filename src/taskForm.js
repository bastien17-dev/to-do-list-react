import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    const { task } = this.state;
    return (
      <form className='taskForm' onSubmit={this.handleSubmit.bind(this)}>
        <div className='taskForm__input'>
          <h2 className='taskForm__input--title'>New Task</h2>
          <input
            className='taskForm__input--field'
            type='text'
            value={task}
            onChange={this.handleChange.bind(this)}
          ></input>
        </div>
        <input
          className='taskForm__button taskForm__button--submit'
          type='submit'
          value='Add Task'
          disabled={task.length === 0}
        ></input>
      </form>
    );
  }
}

export default TaskForm;
