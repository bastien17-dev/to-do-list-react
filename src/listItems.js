import React from 'react';
import './listItems.css';

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsTab: this.props.array
    };

    this.closeTask = this.closeTask.bind(this);
  }

  closeTask(e) {
    e.target.parentNode.style.display = 'none';
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
