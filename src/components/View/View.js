import React from 'react';
import garageRequests from '../../firebaseRequests/garage';

class View extends React.Component {
  state = {
    items: [],
  }

  updateOrderClick = () => {
    const firebaseId = this.props.match.params.id;
    console.error('firebaseId:',firebaseId);
    garageRequests
      .getSingleRequest(firebaseId)
      .then((newItem) => {
        this.setState({items: newItem});
      })
      .catch((err) => {
        console.error('error in post', err);
      });
  }

  componentDidMount () {
    this.updateOrderClick();
  }

  render () {
    console.error(this.state.items);
    return (
      <li className="Item thumbnail">
        <img src={this.state.items.itemImage} alt={this.state.items.itemName} />
      </li>
    );
  }
}

export default View;
