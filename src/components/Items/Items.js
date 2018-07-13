import React from 'react';

class Items extends React.Component {
  addClickEvent = () => {
    this.props.addToOrder(this.props.details.id);
  }
  render () {
    const { details } = this.props;

    const image = require(`${details.itemImage}`);
    return (
      <li className="Item">
        <img src={image} alt={details.itemImage} />
        <h3 className="name">
          {details.itemName}
        </h3>
        <p>{details.itemDescription}</p>
        <button
          onClick={this.addClickEvent}
        >
        </button>
      </li>

    );
  }
}

export default Items;
