import React from 'react';

class Items extends React.Component {
  addClickEvent = () => {
    this.props.addToOrder(this.props.details.id);
  }
  render () {
    const { details } = this.props;

    const isAvailable = details.status === 'available';
    const image = require(`${details.image}`);
    return (
      <li className="Fish">
        <img src={image} alt={details.name} />
        <h3 className="name">
          {details.name}
          <span className="price">{details.price}></span>
        </h3>
        <p>{details.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.addClickEvent}
        >
          {isAvailable ? 'Add to Order!' : 'SOld Out!'}
        </button>
      </li>

    );
  }
}

export default Items;
