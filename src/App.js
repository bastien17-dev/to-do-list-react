import React from 'react';

import ButtonReset from './buttonReset';
import TaskToDo from './TaskToDo';
import Titles from './Titles';

import './style/App.css';

const initialTasks = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks,
      toDoSectionSelected: true
    };

    this.addTaskToList = this.addTaskToList.bind(this);
    this.resetList = this.resetList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.sectionSelection = this.sectionSelection.bind(this);
  }

  addTaskToList(element) {
    this.setState({
      tasks: [element, ...this.state.tasks]
    });
  }

  resetList(tasks = initialTasks) {
    this.setState({ tasks });
  }

  deleteTask(index) {
    const taskBis = [...this.state.tasks];
    taskBis.splice(index, 1);
    this.setState({ tasks: taskBis });
  }

  sectionSelection(toDoIsSelected = true) {
    toDoIsSelected
      ? this.setState({ toDoSectionSelected: true })
      : this.setState({ toDoSectionSelected: false });
  }

  render() {
    const {
      tasks
    } = this.state; /* equivaut à const tasks = this.state.tasks; */
    console.log(tasks);

    return (
      <div className='container'>
        <Titles selection={this.sectionSelection} />
        <TaskToDo
          selected={this.state.toDoSectionSelected}
          tasks={tasks}
          deleteTask={this.deleteTask}
          addTaskToList={this.addTaskToList}
        />
        <ButtonReset onClick={this.resetList}></ButtonReset>
      </div>
    );
  }
}

export default App;
