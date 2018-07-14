import React from 'react';

import Items from '../Items/Items';
import Garage from '../Garage/Garage';

import itemRequests from '../../firebaseRequests/item';
import authRequests from '../../firebaseRequests/auth';
import garageRequests from '../../firebaseRequests/garage';

import './New.css';

class New extends React.Component {
  state = {
    items: [],
    garage: {},
  };

  addToGarage = (key) => {
    console.error(key);
    const newGarage = { ...this.state.garage };
    newGarage[key] = newGarage[key] + 1 || 1;
    this.setState({ garage: newGarage });
  }

  removeFromGarage = (key) => {
    const newGarage = { ...this.state.garage };
    delete newGarage[key];
    this.setState({ garage: newGarage });
  }

  saveNewGarage = () => {
    const newGarage = { itmes: { ...this.state.garage } };
    newGarage.uid = authRequests.getUid();
    newGarage.dateTime = Date.now();
    garageRequests
      .postRequest(newGarage)
      .then(() => {
        this.props.history.push('/garage');
      })
      .catch((err) => {
        console.error('error in post', err);
      });
  }

  componentDidMount () {
    itemRequests
      .getRequest()
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => {
        console.error('error with item get request', err);
      });
  }

  render () {
    const itemComponents = this.state.items.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
          addToGarage={this.addToGarage}
        />
      );
    });
    return (
      <div className="New">
        <div className="col-xs-8 inventory-container">
          <h2>Inventory</h2>
          <ul className="items">
            {itemComponents}
          </ul>
        </div>
        <Garage
          items={this.state.items}
          garage={this.state.garage}
          removeFromGarage={this.removeFromGarage}
          saveNewGarage={this.saveNew}
        />
      </div>
    );
  }
}

export default New;
