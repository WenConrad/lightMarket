-- Drop and recreate Listings table (Example)

DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER NOT NULL REFERENCES properties(id),
  listing_agent INTEGER NOT NULL REFERENCES users(id),
  price INTEGER NOT NULL,
  listing_date DATE NOT NULL,
  sold_date DATE,
  photo_url VARCHAR(255)
);
