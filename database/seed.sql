-- Author: Reagan Otema
-- Seed data for vehicles table
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  make VARCHAR(50),
  model VARCHAR(50),
  year INT,
  price NUMERIC,
  mileage INT,
  image_url TEXT,
  description TEXT
);

INSERT INTO vehicles (make, model, year, price, mileage, image_url, description) VALUES
('Toyota', 'Camry', 2022, 24500, 12000, 'https://example.com/camry.jpg', 'Reliable midsize sedan with excellent fuel economy.'),
('Honda', 'Civic', 2021, 22000, 15000, 'https://example.com/civic.jpg', 'Compact car with sporty handling and comfortable interior.'),
('Ford', 'F-150', 2023, 40000, 5000, 'https://example.com/f150.jpg', 'Powerful pickup truck ideal for work and recreation.');
