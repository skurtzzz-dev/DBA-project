CREATE DATABASE IF NOT EXISTS luzonloop;
USE luzonloop;

CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS event_types (
  type_id INT AUTO_INCREMENT PRIMARY KEY,
  type_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS locations (
  location_id INT AUTO_INCREMENT PRIMARY KEY,
  venue_name VARCHAR(150) NOT NULL,
  street_address VARCHAR(255) NOT NULL,
  barangay VARCHAR(100) NOT NULL,
  city_municipality VARCHAR(100) NOT NULL,
  province VARCHAR(100) NOT NULL,
  region VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
  event_id INT AUTO_INCREMENT PRIMARY KEY,
  event_name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  type_id INT NOT NULL,
  location_id INT NOT NULL,
  created_by INT NOT NULL,
  start_datetime DATETIME NOT NULL,
  end_datetime DATETIME NOT NULL,
  is_free TINYINT(1) NOT NULL DEFAULT 0,
  interested_count INT NOT NULL DEFAULT 0,
  image_url VARCHAR(500) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_events_type (type_id),
  INDEX idx_events_location (location_id),
  INDEX idx_events_creator (created_by),
  INDEX idx_events_start (start_datetime),
  CHECK (end_datetime >= start_datetime),
  CHECK (interested_count >= 0),
  CHECK (is_free IN (0, 1)),
  FOREIGN KEY (type_id) REFERENCES event_types(type_id),
  FOREIGN KEY (location_id) REFERENCES locations(location_id),
  FOREIGN KEY (created_by) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS saved_events (
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  saved_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, event_id),
  INDEX idx_saved_event (event_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);

INSERT IGNORE INTO event_types (type_id, type_name) VALUES
  (1, 'Gaming & Esports'),
  (2, 'Music & Concerts'),
  (3, 'Cosplay'),
  (4, 'Anime & Pop Culture'),
  (5, 'Technology & Innovation'),
  (6, 'Arts & Culture'),
  (7, 'Food & Beverage'),
  (8, 'Sports & Fitness'),
  (9, 'Educational & Academic'),
  (10, 'Business & Networking'),
  (11, 'Automotive & Motorsports'),
  (12, 'Fashion & Lifestyle'),
  (13, 'Film & Photography'),
  (14, 'Community & Festivals');
