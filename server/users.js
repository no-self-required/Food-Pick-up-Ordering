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
        res.json(menu);
      })
      .catch(err => { res.send(err.message) });
  });

  router.post('/', (req, res) => {
    console.log('what do we have here:', req.body);
    const queryParams = [];

    let queryString = `SELECT * FROM menu_items`;

    if (req.body) {
      queryParams.push(req.body.menuID);
      queryString += ` WHERE id=$${queryParams.length} `;
    }

    db.query(queryString, queryParams)
      .then(data => res.send(data.rows))
      .catch(err => res.send(err.message))
  });

  router.post('/checkout', (req, res) => {

  })

  return router;
};
