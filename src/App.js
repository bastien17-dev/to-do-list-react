import React from 'react';

import TaskForm from './taskForm';
import Task from './Task';
import ButtonReset from './buttonReset';

import './style/task.css';
import './style/App.css';

const initialTasks = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks
    };

    this.addTaskToList = this.addTaskToList.bind(this);
    this.resetList = this.resetList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
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

  render() {
    const {
      tasks
    } = this.state; /* equivaut à const tasks = this.state.tasks; */
    return (
      <div className='container'>
        <h1>TO DO:</h1>
        <TaskForm addTask={this.addTaskToList}></TaskForm>
        <ul className='list'>
          {tasks.map((task, i) => (
            <Task key={i} title={task} index={i} deleteTask={this.deleteTask} />
          ))}
        </ul>
        <ButtonReset onClick={this.resetList}></ButtonReset>
      </div>
    );
  }
}

export default App;
