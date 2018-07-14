import React from 'react';

// import Garage from '../Garage/Garage';

import itemRequests from '../../firebaseRequests/item';
import Items from '../../components/Items/Items';
// import garageRequests from '../../firebaseRequests/garage';
// import authRequests from '../../firebaseRequests/auth';

class AllTheStuff extends React.Component {
  state = {
    items: [],
  }
  // addToGarage = (key) => {
  //   console.error(key);
  //   const newGarage = { ...this.state.garage };
  //   newGarage[key] = newGarage[key] + 1 || 1;
  //   this.setState({ garage: newGarage });
  // }
  // removeFromGarage = (key) => {
  //   const newGarage = { ...this.state.garage };
  //   delete newGarage[key];
  //   this.setState({ garage: newGarage });
  // }

  // saveNewGarage = () => {
  //   const newGarage = { itmes: { ...this.state.garage } };
  //   newGarage.uid = authRequests.getUid();
  //   newGarage.dateTime = Date.now();
  //   garageRequests
  //     .postRequest(newGarage)
  //     .then(() => {
  //       this.props.history.push('/garage');
  //     })
  //     .catch((err) => {
  //       console.error('error in post', err);
  //     });
  // }

  redirectToGarage = () => {
    this.props.history.push('/garage');
  }

  componentDidMount () {
    itemRequests
      .getRequestAll()
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => {
        console.error('error in items', err);
      });
  }
  render () {
    const itemComponents = this.state.items.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
          redirectToGarage={this.redirectToGarage}
          flag='FromAllTheStuff'
        />
      );
    });
    return (
      <div className="New">
        <div className="col-xs-8 inventory-container">
          <h1>All The Stuff</h1>
          <ul className="items">
            {itemComponents}
          </ul>

        </div>

      </div>
    );
  }
}

export default AllTheStuff;
