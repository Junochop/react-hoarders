import React from 'react';
import './Items.css';
import garageRequests from '../../firebaseRequests/garage';
import authRequests from '../../firebaseRequests/auth';

class Items extends React.Component {
  addClickEvent = () => {
    console.error('hi', this.props);
    this.props.addToGarage(this.props.details.id);

  }

  state = {
    itemDescription: this.props.details.itemDescription,
    itemImage: this.props.details.itemImage,
    itemName: this.props.details.itemName,
    uid: authRequests.getUid(),
  }
  saveNewGarage = () => {
    garageRequests
      .postRequest(this.state)
      .then(() => {
        this.props.redirectToGarage();
      })
      .catch((err) => {
        console.error('error in post', err);
      });
  }

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
          onClick={this.saveNewGarage}
        >add me
        </button>
      </li>

    );
  }
}

export default Items;
