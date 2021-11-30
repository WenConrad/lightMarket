const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM properties JOIN listings ON properties.id = listings.property_id;`)
      .then(data => {
        const properties = data.rows;
        res.json({ properties });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
