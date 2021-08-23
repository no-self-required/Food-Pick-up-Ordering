/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const createMenu = require("./public/scripts/menu_listing.js");

const express = require('express');
//const { restart } = require('nodemon');
const router  = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const menu = data.rows;
<<<<<<< HEAD
        console.log("menu: ", typeof menu)
        res.send(createMenu(menu))
=======
        res.json(menu);
>>>>>>> 00fba29daa1279f8e4c4f98e68d811e5aabfdb1d
      })
      .catch(err => { res.send(err.message) });
  });
  return router;
};
