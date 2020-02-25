import React from 'react';
import ListItems from './listItems';
import './task.css';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      array: this.props.array
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let arrayBis = [...this.state.array];
    if (this.state.task.length > 1) {
      arrayBis.push(this.state.task);
    }
    this.setState({ array: arrayBis });
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
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
            className='taskForm__submit'
            type='submit'
            value='Add Task'
          ></input>
        </form>
        <ListItems array={this.state.array}></ListItems>
      </div>
    );
  }
}

export default Tasks;
