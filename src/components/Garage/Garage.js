import React from 'react';

import './Garage.css';

class Garage extends React.Component {

  saveGarage = () => {
    this.props.saveNewGarage();
  }

  renderGarage = (key) => {
    const item = this.props.items.find(x => x.id === key);
    const count = this.props.item[key];

    const xClickFunction = () => {
      this.props.removeFromGarage(key);
    };
    return (
      <li
        key={key}
        className="text-left"
      >
        <div className="col-xs-2">{count} lbs</div>
        <div className="col-xs-5">{item.itemName}</div>
        <div className="col-xs-2">
          <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
        </div>
      </li>
    );
  }

  render () {
    const itemIds = Object.keys(this.props.item);
    const itemExists = itemIds.length > 0;
    const total = itemIds.reduce((prevTotal, key) => {
      const item = this.props.items.find(x => x.id === key);
      const count = this.props.item[key];
      const isAvailable = item;
      if (isAvailable) {
        return prevTotal + count ;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>
          {itemIds.map(this.renderGarage)}
        </ul>

        <div className="total">Total: <strong>{(total)}</strong></div>
        {
          itemExists ? (<button className="btn btn-default" onClick={this.saveItem}>save order</button>) : (
            <div>Add item to your garage</div>
          )
        }
      </div>
    );
  }
};

export default Garage;
