const express = require('express');
//const { restart } = require('nodemon');
const router  = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    res.render('order_status');
  })
  return router;
}