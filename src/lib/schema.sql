-- Cars table
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  variant VARCHAR(200),
  price DECIMAL(10, 2) NOT NULL,
  year INTEGER NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type VARCHAR(50) NOT NULL,
  transmission VARCHAR(50) NOT NULL,
  color VARCHAR(100),
  description TEXT,
  status VARCHAR(50) DEFAULT 'Beschikbaar',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Car images table
CREATE TABLE IF NOT EXISTS car_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  car_id UUID REFERENCES cars(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  "order" INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_cars_status ON cars(status);
CREATE INDEX IF NOT EXISTS idx_cars_brand ON cars(brand);
CREATE INDEX IF NOT EXISTS idx_car_images_car_id ON car_images(car_id);

-- Enable Row Level Security (RLS)
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE car_images ENABLE ROW LEVEL SECURITY;

-- Policies for public read access (for frontend)
CREATE POLICY "Allow public read access to cars" ON cars
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to car_images" ON car_images
  FOR SELECT USING (true);

-- Policies for authenticated write access (for admin)
-- Note: You'll need to set up proper auth policies based on your auth system
CREATE POLICY "Allow authenticated insert on cars" ON cars
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on cars" ON cars
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete on cars" ON cars
  FOR DELETE USING (true);

CREATE POLICY "Allow authenticated insert on car_images" ON car_images
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update on car_images" ON car_images
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete on car_images" ON car_images
  FOR DELETE USING (true);
