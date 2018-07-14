import React from 'react';
import itemRequests from '../../firebaseRequests/item';
import Items from '../../components/Items/Items';

import './Garage.css';

class Garage extends React.Component {
  state = {
    items: [],
  }

  componentDidMount () {
    itemRequests
      .getRequestGarage()
      .then((items) => {
        this.setState({ items });
      })
      .catch((err) => {
        console.error('error in items', err);
      });
  }

  // renderGarage = (key) => {
  //   const item = this.props.items.find(x => x.id === key);
  //   const count = this.props.item[key];

  //   const xClickFunction = () => {
  //     this.props.removeFromGarage(key);
  //   };
  //   return (
  //     <li
  //       key={key}
  //       className="text-left"
  //     >
  //       <div className="col-xs-2">{count} lbs</div>
  //       <div className="col-xs-5">{item.itemName}</div>
  //       <div className="col-xs-2">
  //         <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
  //       </div>
  //     </li>
  //   );
  // }
  render () {

    const itemComponents = this.state.items.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
          flag='FromAllGarage'
        />
      );
    });
    console.error('ll',this.state.items);
    return (
      <div className="Garage">
        {itemComponents}
      </div>
    );
  }
};

export default Garage;
