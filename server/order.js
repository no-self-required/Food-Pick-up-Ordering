/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
// const accountSid = process.env

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('IN ORDER.JS POST--------',req.body);

    // const queryParams = [];

    let queryString =
    `
      INSERT INTO orders
      (menu_item_id, phone, total_price)
    `

    if (req.body) {
      queryString += `VALUES (${req.body.menuID}, ${req.body.phoneNumber}, ${req.body.total}); `
    }

    db.query(queryString)
      .then(data => data.rows)
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
