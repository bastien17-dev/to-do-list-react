import React from 'react';

import './style/listItems.css';

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.closeTask = this.closeTask.bind(this);
  }

  closeTask(e) {
    const parentElement = e.target.parentNode;
    parentElement.classList.add('is-deleted');
    setTimeout(() => {
      const index = Array.from(
        document.querySelector('.list').childNodes
      ).findIndex(item => parentElement === item);
      this.props.deleteFromList(index);
    }, 320);
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
