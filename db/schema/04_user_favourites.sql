-- Drop and recreate favourites table (Example)

DROP TABLE IF EXISTS favourites CASCADE;
CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  listing_id NOT NULL REFERENCES listings(id)
);
