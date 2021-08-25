/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('IN ORDER.JS POST--------',req.body);
    // const queryParams = [];

    // const queryString =
    // `
    //   INSERT INTO orders
    //   (menu_item_id, phone, order_time, prep_time, note, total_price, order_status)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7)
    // `

    // if (req.body) {

    // }
    // db.query()
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
  });
  return router;
};
