import React from 'react';

import TaskForm from './taskForm';
import ListItems from './listItems';
import ButtonReset from './buttonReset';

import './task.css';
import './App.css';

const taskList = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: taskList
    };
    this.addTaskToList = this.addTaskToList.bind(this);
    this.resetList = this.resetList.bind(this);
    this.deleteTaskFromTasksList = this.deleteTaskFromTasksList.bind(this);
  }

  addTaskToList(element) {
    let arrayBis = [...this.state.array];
    if (element.length > 1) {
      arrayBis.push(element);
    }
    this.setState({ array: arrayBis });
  }

  resetList() {
    this.setState({ array: taskList });
  }

  deleteTaskFromTasksList(index) {
    const arrayBis = [...this.state.array];
    arrayBis.splice(index, 1);
    this.setState({ array: arrayBis });
  }

  render() {
    let tasks = this.state.array;
    return (
      <div className='container'>
        <h1>TO DO:</h1>
        <TaskForm addTask={this.addTaskToList}></TaskForm>
        <ListItems
          array={tasks}
          deleteFromList={this.deleteTaskFromTasksList}
        ></ListItems>
        <ButtonReset onClick={this.resetList}></ButtonReset>
      </div>
    );
  }
}

export default App;
