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
    let content = e.target.parentNode;
    content.classList.add('is-hidden');
    setTimeout(() => {
      content.style.display = 'none';
    }, 500);
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
