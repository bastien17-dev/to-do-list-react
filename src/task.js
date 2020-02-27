import React from 'react';
import ListItems from './listItems';
import ButtonReset from './buttonReset';
import './task.css';

const taksList = [];

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      array: taksList
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetList = this.resetList.bind(this);
    this.deleteTaskFromTasksList = this.deleteTaskFromTasksList.bind(this);
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

  resetList() {
    this.setState({ array: taksList });
  }

  deleteTaskFromTasksList(index) {
    const arrayBis = [...this.state.array];
    arrayBis.splice(index, 1);
    this.setState({ array: arrayBis });
  }

  render() {
    let tasks = this.state.array;
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
            className='taskForm__button taskForm__button--submit'
            type='submit'
            value='Add Task'
          ></input>
        </form>
        <ListItems
          array={tasks}
          deleteFromList={this.deleteTaskFromTasksList}
        ></ListItems>
        <ButtonReset onClick={this.resetList}></ButtonReset>
      </div>
    );
  }
}

export default Tasks;
