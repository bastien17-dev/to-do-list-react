import React from 'react';
import './listItems.css';

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.closeTask = this.closeTask.bind(this);
  }

  closeTask(e) {
    const index = Array.from(
      document.querySelector('.list').childNodes
    ).findIndex(item => e.target.parentNode === item);
    this.props.deleteFromList(index);
  }

  render() {
    return (
      <ul className='list'>
        {this.props.array.map(element => (
          <li className='list__items' key={element}>
            {element}
            <button className='list__closeButton' onClick={this.closeTask}>
              DONE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
