import React from 'react';

import itemRequests from '../../firebaseRequests/item';
import Items from '../../components/Items/Items';

class Inventory extends React.Component {
  state = {
    items: [],
  }
  componentDidMount () {
    itemRequests
      .getRequest()
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => {
        console.error('error in items', err);
      });
  }
  render () {
    const itemComponents = this.state.fishes.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
        />

      );
    });
    return (
      <div className="Inventory col-xs-12">
        <h1>Inventory</h1>
        <ul className="items">
          {itemComponents}
        </ul>
      </div>

    );
  }
}

export default Inventory;
