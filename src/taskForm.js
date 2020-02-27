import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <form className='taskForm' onSubmit={this.handleSubmit}>
        <div className='taskForm__input'>
          <h2 className='taskForm__input--title'>New Task</h2>
          <input
            className='taskForm__input--field'
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
        </div>
        <input
          className='taskForm__button taskForm__button--submit'
          type='submit'
          value='Add Task'
        ></input>
      </form>
    );
  }
}

export default TaskForm;
