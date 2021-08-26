/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  const addOrderList = function (order, cart) {
    console.log('CART--------', cart);
    console.log('ORDER--------', order);
    const values = cart.map(element => {
      return `(${order.id}, ${element.id}, ${element.price})`;
    })
    const query = `INSERT INTO order_items (order_id, menu_item_id, price)
    VALUES ${values.join(', ')} RETURNING *`;

    return db
    .query(query)
    .then(data => console.log('IN ADDORDERLIST------',data.rows));
  }

  const orderCheckout = async function (cart) {
    return db
      .query(`INSERT INTO orders (phone, total_price, order_status)
      VALUES (${cart.phoneNumber}, ${cart.total}, 1) RETURNING *`)
      .then(data => {
        console.log('DATA INSIDE OF ORDER.JS-----', data);
        data.rows.forEach(order => {
          addOrderList(order, cart.cart)
        });
      })
      // .then( 1st twilio sms )
      .catch(err => { console.log(err) });
  }

  router.post("/", (req, res) => {
    const order = req.body;
    console.log('IN ORDER.JS POST--------',order);

    orderCheckout(order)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
  });
  return router;
};
