import React from 'react';
import './listItems.css';

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.array
    };
  }

  render() {
    return (
      <ul>
        {this.props.array.map(element => (
          <li className='list' key={element.indexOf()}>
            {element}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
