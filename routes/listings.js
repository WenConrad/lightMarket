const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM listings JOIN properties ON properties.id = listings.property_id;`)
      .then(data => {
        const listings = data.rows;
        res.json({ listings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
