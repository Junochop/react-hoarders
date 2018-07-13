import React from 'react';
import './Items.css';

class Items extends React.Component {
  // addClickEvent = () => {
  //   this.props.addToOrder(this.props.details.id);
  // }
  render () {
    const { details } = this.props;

    const image = `${details.itemImage}`;
    return (

      <li className="Item thumbnail">
        <img src={image} alt={details.itemImage}/>
        <h3 className="name">
          {details.itemName}
        </h3>
        <p>{details.itemDescription}</p>
        <button className="btn btn-danger button"
        >add me
        </button>
      </li>

    );
  }
}

export default Items;
