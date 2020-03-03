import React from 'react';

import './style/titles.css';

class Titles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoSelected: true
    };

    this.handleClickToDo = this.handleClickToDo.bind(this);
    this.handleClickDone = this.handleClickDone.bind(this);
  }

  handleClickToDo() {
    this.setState({ todoSelected: true });
    this.props.selection(true);
  }

  handleClickDone() {
    this.setState({ todoSelected: false });
    this.props.selection(false);
  }

  render() {
    return (
      <div className='container__title'>
        <div className='separation-decoration'></div>
        <div
          onClick={this.handleClickToDo}
          className={`container__title--to-do ${
            this.state.todoSelected ? 'selected' : ''
          }`}
        >
          <h1>TO DO</h1>
        </div>
        <div onClick={this.handleClickDone} className='container__title--done'>
          <h1>DONE</h1>
        </div>
      </div>
    );
  }
}

export default Titles;
