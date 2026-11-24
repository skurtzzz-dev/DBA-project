USE luzonloop;

INSERT INTO locations (location_id, venue_name, street_address, barangay, city_municipality, province, region) VALUES
  (1, 'SMX Convention Center', 'Seascape Village, Bay Area', 'Bay Area', 'Pasay City', 'Metro Manila', 'NCR'),
  (2, 'Baguio Convention Center', 'Gov. Pack Road', 'Downtown', 'Baguio City', 'Benguet', 'CAR'),
  (3, 'The Filinvest Tent', 'Alabang Town Center Area', 'Alabang', 'Muntinlupa City', 'Metro Manila', 'NCR'),
  (4, 'World Trade Center Metro Manila', 'Pasay Rotonda Area', 'Bay Area', 'Pasay City', 'Metro Manila', 'NCR'),
  (5, 'Philippine International Convention Center', 'Roxas Boulevard', 'Bay Area', 'Pasay City', 'Metro Manila', 'NCR'),
  (6, 'Downtown Event Hall', 'Downtown San Fernando', 'Santo Rosario', 'San Fernando', 'Pampanga', 'Region III'),
  (7, 'Nuvali Event Grounds', 'Nuvali Boulevard', 'Santa Rosa Greenfield City', 'Santa Rosa', 'Laguna', 'Region IV-A'),
  (8, 'Ynares Center', 'Sumulong Highway', 'San Roque', 'Antipolo City', 'Rizal', 'Region IV-A'),
  (9, 'University Activity Center', 'University Avenue', 'Diliman', 'Quezon City', 'Metro Manila', 'NCR'),
  (10, 'The Podium Hall', 'ADB Avenue', 'Ortigas Center', 'Mandaluyong City', 'Metro Manila', 'NCR'),
  (11, 'Clark Expo', 'Clark Freeport Zone', 'Mabalacat', 'Mabalacat City', 'Pampanga', 'Region III'),
  (12, 'Megatrade Hall', 'Shaw Boulevard', 'Ortigas Center', 'Mandaluyong City', 'Metro Manila', 'NCR'),
  (13, 'Cultural Center of the Philippines', 'Roxas Boulevard', 'Bay Area', 'Pasay City', 'Metro Manila', 'NCR'),
  (14, 'Provincial Event Grounds', 'Quezon Provincial Capitol Area', 'Isabang', 'Lucena City', 'Quezon', 'Region IV-A'),
  (15, 'Online Event Hall', 'Virtual venue', 'Online', 'Online', 'Online', 'Online')
ON DUPLICATE KEY UPDATE
  venue_name = VALUES(venue_name),
  street_address = VALUES(street_address),
  barangay = VALUES(barangay),
  city_municipality = VALUES(city_municipality),
  province = VALUES(province),
  region = VALUES(region);

SET @creator_id = (SELECT MIN(user_id) FROM users);

INSERT INTO events (event_id, event_name, description, type_id, location_id, created_by, start_datetime, end_datetime, is_free, interested_count, image_url) VALUES
  (1, 'SMX Game Arena', 'Two days of bracket play, creator meet-and-greets, and a finals night on the SMX floor. Expect a crowded concourse, a merch strip, and clear schedules for each game.', 1, 1, @creator_id, '2026-12-05 10:00:00', '2026-12-06 20:00:00', 0, 84, 'https://images.pexels.com/photos/30696550/pexels-photo-30696550.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (2, 'Baguio Live Sessions', 'A Baguio night of original songs and familiar favorites from independent acts. The room is small enough that the audience becomes part of the set.', 2, 2, @creator_id, '2026-11-28 16:00:00', '2026-11-28 23:00:00', 0, 37, 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (3, 'Cosplay Carnival', 'Costume makers and character fans take over the Filinvest Tent with a runway, repair tables, and photo corners built for full builds.', 3, 3, @creator_id, '2026-12-12 09:00:00', '2026-12-12 18:00:00', 0, 62, 'https://images.pexels.com/photos/29081303/pexels-photo-29081303.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (4, 'WTC Pop Culture Expo', 'A weekend for anime and pop culture fans: panel rooms, a packed merch hall, guest sessions, and late-afternoon screenings.', 4, 4, @creator_id, '2026-11-19 10:00:00', '2026-11-20 19:00:00', 0, 91, 'https://images.pexels.com/photos/29901451/pexels-photo-29901451.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (5, 'Manila Tech Forum', 'A one-day PICC forum on the tools and teams moving Philippine tech forward, with short talks, demos, and hallway conversations.', 5, 5, @creator_id, '2026-11-24 09:00:00', '2026-11-24 18:00:00', 0, 48, 'https://images.pexels.com/photos/34774347/pexels-photo-34774347.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (6, 'San Fernando Arts Walk', 'A self-guided walk through downtown San Fernando with local art, handmade work, and short performances at each stop.', 6, 6, @creator_id, '2026-11-27 10:00:00', '2026-11-28 18:00:00', 1, 23, 'https://images.pexels.com/photos/33868629/pexels-photo-33868629.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (7, 'Nuvali Food Park Weekend', 'Nuvali''s event grounds turn into a weekend food park with regional dishes, small vendors, acoustic sets, and picnic tables.', 7, 7, @creator_id, '2026-11-21 10:00:00', '2026-11-22 22:00:00', 1, 76, 'https://images.pexels.com/photos/20147044/pexels-photo-20147044.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (8, 'Antipolo Sports Weekend', 'A practical, all-levels sports day at Ynares Center: friendly matches, fitness stations, and community teams rather than pro spectacle.', 8, 8, @creator_id, '2026-11-29 08:00:00', '2026-11-30 19:00:00', 1, 55, 'https://images.pexels.com/photos/32835125/pexels-photo-32835125.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (9, 'Quezon City Learning Forum', 'A Quezon City forum for students and early-career learners, with research posters, short talks, and mentors who stay after the session.', 9, 9, @creator_id, '2026-11-24 08:00:00', '2026-11-24 17:00:00', 1, 19, 'https://images.pexels.com/photos/31367499/pexels-photo-31367499.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (10, 'Metro Founders Connect', 'A Mandaluyong meet-up for founders, freelancers, and small teams who want useful introductions, not another slide deck.', 10, 10, @creator_id, '2026-11-18 09:00:00', '2026-11-18 16:00:00', 0, 68, 'https://images.pexels.com/photos/30477894/pexels-photo-30477894.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (11, 'Clark Auto Showcase', 'A Clark Expo floor filled with custom builds, concept cars, and regional exhibitors, with time set aside for owners to talk shop.', 11, 11, @creator_id, '2026-12-07 10:00:00', '2026-12-07 20:00:00', 0, 42, 'https://images.pexels.com/photos/5287985/pexels-photo-5287985.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (12, 'Manila Style Fair', 'A Mandaluyong fair for independent labels and makers, with racks to browse, short style talks, and booths that reward a slow walk.', 12, 12, @creator_id, '2026-11-24 10:00:00', '2026-11-24 16:00:00', 1, 96, 'https://images.pexels.com/photos/17097094/pexels-photo-17097094.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (13, 'CCP Film & Photo Week', 'Screenings, photo walls, and creator conversations at the CCP, focused on work made outside the mainstream.', 13, 13, @creator_id, '2026-11-15 10:00:00', '2026-11-16 21:00:00', 0, 31, 'https://images.pexels.com/photos/33156934/pexels-photo-33156934.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (14, 'Lucena Community Festival', 'Lucena''s year-end gathering brings local performances, food stalls, games, and family activities to the provincial grounds.', 14, 14, @creator_id, '2026-12-31 09:00:00', '2026-12-31 22:00:00', 1, 14, 'https://images.pexels.com/photos/31644441/pexels-photo-31644441.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (15, 'LuzonLoop Online Expo', 'A full-day online expo with virtual booths, live product walks, and short talks for teams across Luzon.', 5, 15, @creator_id, '2026-12-03 09:00:00', '2026-12-03 18:00:00', 1, 59, 'https://images.pexels.com/photos/5486096/pexels-photo-5486096.jpeg?auto=compress&cs=tinysrgb&w=800')
ON DUPLICATE KEY UPDATE
  event_name = VALUES(event_name),
  description = VALUES(description),
  type_id = VALUES(type_id),
  location_id = VALUES(location_id),
  created_by = VALUES(created_by),
  start_datetime = VALUES(start_datetime),
  end_datetime = VALUES(end_datetime),
  is_free = VALUES(is_free),
  interested_count = VALUES(interested_count),
  image_url = VALUES(image_url);
