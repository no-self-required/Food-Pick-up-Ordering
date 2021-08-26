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
      // .then(data => console.log('TO TWILIO', data.rows.phoneNumber))
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

    // client.messages
    // .create({
    //    body: 'Accept order? Reply with prep time to accept.',
    //    messagingServiceSid: 'MG2c7c90f5bbb2eba4c7bfcfde64d81397',
    //    from: '+17147092156',
    //    to: `+17052415272` //restaurant number (my num)
    //  })
    // .then(message => res.send(`The message to: ${message.to} was sent `))
