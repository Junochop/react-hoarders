import axios from 'axios';

import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/garage.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const orders = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            orders.push(res.data[fbKey]);
          });
        }
        resolve(orders);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = (newOrder) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/garage.json`, newOrder)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteRequest = (orderId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/garage/${orderId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getSingleRequest = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/garage/${id}.json`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const putRequest = (orderId, updatedOrder) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/garage/${orderId}.json`, updatedOrder)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest, deleteRequest, getSingleRequest, putRequest };
