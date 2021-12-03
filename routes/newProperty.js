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

    return db.query(`INSERT INTO properties (address, property_type, sqft, bedrooms, bathrooms, built_in_year) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [req.body.title, req.body.property_type, +req.body.sqft, +req.body.bedrooms, +req.body.bathrooms, +req.body.build_year])
      .then(data => {
        const properties = data.rows;
        console.log('this is the:', properties)
        res.json({ properties });
      })
      .catch(err => {
        console.log(err.message)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
