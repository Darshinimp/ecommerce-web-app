CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC,
  department TEXT
);
INSERT INTO products (name, price, department) VALUES 
('Wireless Mouse', 599.00, 'Electronics'),
('Bluetooth Headphones', 1299.00, 'Electronics'),
('Office Chair', 4999.00, 'Furniture'),
('Notebook (100 pages)', 25.00, 'Stationery'),
('Ball Pen (Blue)', 10.00, 'Stationery'),
('Water Bottle - 1L', 149.00, 'Kitchen'),
('LED Table Lamp', 799.00, 'Electronics'),
('Backpack (30L)', 999.00, 'Bags'),
('Smartphone Stand', 199.00, 'Accessories'),
('Yoga Mat', 699.00, 'Fitness');