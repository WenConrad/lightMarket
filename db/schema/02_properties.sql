-- Drop and recreate Properties table (Example)

DROP TABLE IF EXISTS properties CASCADE;
CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR(255) NOT NULL,
  property_type VARCHAR(255),
  sqft INTEGER,
  bedrooms INTEGER,
  bathrooms INTEGER,
  built_in_year INTEGER
);
