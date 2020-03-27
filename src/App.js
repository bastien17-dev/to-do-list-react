import React from 'react';

import ButtonReset from './ButtonReset';
import TaskToDo from './TaskToDo';
import Titles from './Titles';
import TasksDone from './TasksDone.js';

import './style/App.css';

const setInitialTasksStorage = elements => {
  localStorage.setItem('initialTasks', elements);
};
const setInitialTasksDoneStorage = elements => {
  localStorage.setItem('initialTasksDone', elements);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: localStorage.getItem('initialTasks')
        ? localStorage.getItem('initialTasks').split(',')
        : [],
      tasksDone: localStorage.getItem('initialTasksDone')
        ? localStorage.getItem('initialTasksDone').split(',')
        : [],
      toDoSectionSelected: true
    };
  }

  addTaskToList(element) {
    setInitialTasksStorage(`
      ${element}
      ${
        localStorage.getItem('initialTasks')
          ? ',' + localStorage.getItem('initialTasks')
          : ''
      }`);
    this.setState({
      tasks: localStorage.getItem('initialTasks').split(',')
    });
  }

  resetList(tasks = [], tasksDone = []) {
    localStorage.clear();
    this.setState({ tasks });
    this.setState({ tasksDone });
  }

  taskIsDone(index) {
    setInitialTasksDoneStorage(`
      ${this.state.tasks[index]}
      ${
        localStorage.getItem('initialTasksDone')
          ? ',' + localStorage.getItem('initialTasksDone')
          : ''
      }
      `);
    this.setState({
      tasksDone: localStorage.getItem('initialTasksDone').split(',')
    });
    const taskBis = [...this.state.tasks];
    taskBis.splice(index, 1);
    setInitialTasksStorage(taskBis.join(','));
    this.setState({ tasks: taskBis });
  }

  deleteTask(index) {
    const taskBis = [...this.state.tasksDone];
    taskBis.splice(index, 1);
    setInitialTasksDoneStorage(taskBis.join(','));
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
        <Titles
          selection={this.sectionSelection.bind(this)}
          tasks={tasks}
          tasksDone={tasksDone}
        />
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
