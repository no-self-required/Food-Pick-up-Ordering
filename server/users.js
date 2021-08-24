/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
//const { restart } = require('nodemon');
const router  = express.Router();
// const cookieSession = require('cookie-session');

module.exports = (db) => {

  router.get('/', (req, res) => {

    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const menu = data.rows;
        res.json(menu);
      })
      .catch(err => { res.send(err.message) });
  });

  router.post('/', (req, res) => {
    db.query(`SELECT * FROM menu_items WHERE menu_item.id = $1`, [req.body.menuID])
      .then(data => {
        const menu = data.rows;
        res.json(menu)
      })
      .catch(err => { res.send(err.message) });
    console.log('------------post request from menu listing js file: ', req.body);
  });

  return router;
};
