import React from 'react';

import TaskForm from './TaskForm';
import Task from './Task'
import ButtonReset from './buttonReset';

import './style/task.css';
import './style/App.css';

const initialTasks = ['Range ta chambre Benoit!'];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: initialTasks
    }

    this.addTask = this.addTask.bind(this)
    this.resetTasks = this.resetTasks.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addTask(element) {
    this.setState({
      tasks: [element, ...this.state.tasks]
    })
  }

  resetTasks() {
    this.setState({ tasks: initialTasks })
  }

  deleteTask(index) {
    const tasksBis = [...this.state.tasks]
    tasksBis.splice(index, 1)
    this.setState({ tasks: tasksBis })
  }

  render() {
    const { tasks } = this.state

    return (
      <div className='container'>
        <h1>TO DO:</h1>
        <TaskForm addTask={this.addTask} />
        <ul className='list'>
          {tasks.map((task, i) => (
            <Task
              key={i}
              title={task}
              index={i}
              deleteTask={this.deleteTask}
            />
          ))}
        </ul>
        <ButtonReset onClick={this.resetTasks} />
      </div>
    );
  }
}

export default App;
