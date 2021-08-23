/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
//const { restart } = require('nodemon');
const router  = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const menu = data.rows;
        // res.json({ menu });
        res.read(menu);
      })
      .catch(err => { res.send(err.message) });
  });
  return router;
};
