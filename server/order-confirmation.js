const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {
    console.log('IN ORDER-CONFIRMATION.JS POST--------', req.body);
    let prepTime = req.body.Body;
    console.log("PREP TIME = ", prepTime)

    db.query(`
    SELECT phone
    FROM orders
    ORDER BY order_time DESC
    LIMIT 1;
    `)
    .then(data => {
      client.messages
      .create({
        body: `Your order has been accepted. It will take ${prepTime} minutes`,
        messagingServiceSid: 'MG2c7c90f5bbb2eba4c7bfcfde64d81397',
        from: '+17147092156',
        to: `+1${data.rows[0].phone}` //client num
      })
      setTimeout(function(){
        client.messages
          .create({
            body: `Your order is complete!`,
            messagingServiceSid: 'MG2c7c90f5bbb2eba4c7bfcfde64d81397',
            from: '+17147092156',
            to: `+1${data.rows[0].phone}` //client num
          })
      }, 10000);
    })
  });
  return router;
};
