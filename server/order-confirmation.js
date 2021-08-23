<<<<<<< HEAD

=======
>>>>>>> 9a75cb256ee0c5a823838b7513863d0e4c24c606
const express = require('express');
//const { restart } = require('nodemon');
const router  = express.Router();

<<<<<<< HEAD

=======
>>>>>>> 9a75cb256ee0c5a823838b7513863d0e4c24c606
module.exports = (db) => {

  router.get('/', (req, res) => {
    res.render('order_status');
  })
  return router;
}
