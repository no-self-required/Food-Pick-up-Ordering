const accountSid = 'AC8fff9785a0630a0f17524ceb3ad56414';
const authToken = 'd482bbf6cfb2bfaa75f65bbc81ea773e'

const client = require('twilio')(accountSid, authToken);

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {
    console.log('IN ORDER-CONFIRMATION.JS POST--------', req.body);
    let prepTime = req.body.Body;
    console.log("PREP TIME = ", prepTime)
    console.log("phone number = ", req.body.phoneNumber)

    client.messages
      .create({
        body: 'Your order has been accepted',
        messagingServiceSid: 'MG2c7c90f5bbb2eba4c7bfcfde64d81397',
        from: '+17147092156',
        to: `+1${req.body.phoneNumber}` //client num
      })
      .then(message => res.send(`The message to: ${message.to} was sent `))

  });
  return router;
};
