import React from 'react';

import ButtonReset from './ButtonReset';
import TaskToDo from './TaskToDo';
import Titles from './Titles';
import TasksDone from './TasksDone.js';

import './style/App.css';

const initialTasks = [];
const initialTasksDone = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks,
      tasksDone: initialTasksDone,
      toDoSectionSelected: true
    };
  }

  addTaskToList(element) {
    this.setState({
      tasks: [element, ...this.state.tasks]
    });
  }

  resetList(tasks = initialTasks, tasksDone = initialTasksDone) {
    this.setState({ tasks });
    this.setState({ tasksDone });
  }

  taskIsDone(index) {
    this.setState({
      tasksDone: [this.state.tasks[index], ...this.state.tasksDone]
    });
    const taskBis = [...this.state.tasks];
    taskBis.splice(index, 1);
    this.setState({ tasks: taskBis });
  }

  deleteTask(index) {
    const taskBis = [...this.state.tasksDone];
    taskBis.splice(index, 1);
    this.setState({ tasksDone: taskBis });
  }

  sectionSelection(toDoIsSelected = true) {
    toDoIsSelected
      ? this.setState({ toDoSectionSelected: true })
      : this.setState({ toDoSectionSelected: false });
  }

  render() {
    const {
      tasks,
      tasksDone
    } = this.state; /* equivaut à const tasks = this.state.tasks  const tasksDone = this.state.tasks */

    return (
      <div
        className={`container ${
          this.state.toDoSectionSelected ? 'todoSelected' : ''
        }`}
      >
        <Titles selection={this.sectionSelection.bind(this)} />
        <TaskToDo
          selected={this.state.toDoSectionSelected}
          tasks={tasks}
          deleteTask={this.taskIsDone.bind(this)}
          addTaskToList={this.addTaskToList.bind(this)}
        />
        <TasksDone
          selected={this.state.toDoSectionSelected}
          tasks={tasksDone}
          deleteTask={this.deleteTask.bind(this)}
        />
        <ButtonReset onClick={this.resetList.bind(this)}></ButtonReset>
      </div>
    );
  }
}

export default App;
