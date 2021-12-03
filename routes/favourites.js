/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { request } = require('express');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('body from line 14:', req.body)
    return db.query(`INSERT INTO favourites (user_id, listing_id)
    VALUES ($1,$2) RETURNING *;`, [req.body.user_id, req.body.listing_id])
      .then(data => {
        const favourites = data.rows;
        console.log('this is the favourites:', favourites)
        res.json({ favourites });
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
