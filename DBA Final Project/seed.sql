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
  (1, 'SMX Year-End Gaming Finals', 'The loop closes with two days of bracket play at SMX: open qualifiers, creator matchups, and a finals night with a live merch strip and a clear game-by-game schedule.', 1, 1, @creator_id, '2026-12-09 10:00:00', '2026-12-10 20:00:00', 0, 128, 'https://images.pexels.com/photos/30696550/pexels-photo-30696550.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (2, 'Baguio December Live Sessions', 'An intimate December night of original songs and familiar favorites from independent Baguio acts, with a short acoustic set before the main lineup.', 2, 2, @creator_id, '2026-12-10 16:00:00', '2026-12-10 22:30:00', 0, 64, 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (3, 'Cosplay Holiday Carnival', 'Holiday-themed builds take over the Filinvest Tent with a costume runway, repair tables, and photo corners for groups and full builds.', 3, 3, @creator_id, '2026-12-11 09:00:00', '2026-12-11 18:00:00', 0, 88, 'https://images.pexels.com/photos/29081303/pexels-photo-29081303.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (4, 'WTC Year-End Pop Culture Expo', 'A two-day send-off for anime and pop culture fans: panel rooms, a packed merch hall, guest sessions, and afternoon screenings.', 4, 4, @creator_id, '2026-12-12 10:00:00', '2026-12-13 19:00:00', 0, 112, 'https://images.pexels.com/photos/29901451/pexels-photo-29901451.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (5, 'PICC Tech Wrap-Up Forum', 'A one-day PICC forum on the tools and teams that shaped Philippine tech in 2026, with short talks, live demos, and hallway conversations.', 5, 5, @creator_id, '2026-12-14 09:00:00', '2026-12-14 17:00:00', 0, 73, 'https://images.pexels.com/photos/34774347/pexels-photo-34774347.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (6, 'San Fernando Lantern Arts Walk', 'A self-guided walk through downtown San Fernando with lantern displays, local art, handmade work, and short performances at each stop.', 6, 6, @creator_id, '2026-12-15 10:00:00', '2026-12-16 18:00:00', 1, 41, 'https://images.pexels.com/photos/33868629/pexels-photo-33868629.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (7, 'Nuvali Christmas Food Park', 'Nuvali''s grounds turn into a Christmas food park with regional dishes, small vendors, acoustic sets, and picnic tables for the whole weekend.', 7, 7, @creator_id, '2026-12-17 10:00:00', '2026-12-18 21:00:00', 1, 95, 'https://images.pexels.com/photos/20147044/pexels-photo-20147044.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (8, 'Antipolo Year-End Sports Fest', 'An all-levels sports fest at Ynares Center with friendly matches, fitness stations, and community teams closing out the year together.', 8, 8, @creator_id, '2026-12-19 08:00:00', '2026-12-20 18:00:00', 1, 67, 'https://images.pexels.com/photos/32835125/pexels-photo-32835125.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (9, 'QC Student Research Showcase', 'A Quezon City showcase for students and early-career learners, with research posters, short talks, and mentors who stay after each session.', 9, 9, @creator_id, '2026-12-21 08:00:00', '2026-12-21 16:00:00', 1, 34, 'https://images.pexels.com/photos/31367499/pexels-photo-31367499.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (10, 'Metro Founders Year-End Mixer', 'A relaxed year-end mixer for founders, freelancers, and small teams to swap 2026 lessons and make useful introductions before the break.', 10, 10, @creator_id, '2026-12-22 15:00:00', '2026-12-22 20:00:00', 0, 81, 'https://images.pexels.com/photos/30477894/pexels-photo-30477894.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (11, 'Clark Holiday Auto Showcase', 'A Clark Expo floor filled with custom builds, concept cars, and regional exhibitors, with time set aside for owners to trade year-end stories.', 11, 11, @creator_id, '2026-12-23 10:00:00', '2026-12-23 19:00:00', 0, 56, 'https://images.pexels.com/photos/5287985/pexels-photo-5287985.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (12, 'Megatrade Holiday Style Fair', 'A Christmas Eve fair for independent labels and makers, with racks to browse, short style talks, and booths built for slow, last-minute shopping.', 12, 12, @creator_id, '2026-12-24 10:00:00', '2026-12-24 17:00:00', 1, 103, 'https://images.pexels.com/photos/17097094/pexels-photo-17097094.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (13, 'CCP Year-End Film & Photo Week', 'Screenings, photo walls, and creator conversations at the CCP, looking back at work made outside the mainstream over the past year.', 13, 13, @creator_id, '2026-12-26 10:00:00', '2026-12-27 21:00:00', 0, 49, 'https://images.pexels.com/photos/33156934/pexels-photo-33156934.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (14, 'Lucena New Year Community Festival', 'Lucena''s year-end gathering brings local performances, food stalls, games, and family activities to the provincial grounds before the New Year.', 14, 14, @creator_id, '2026-12-30 09:00:00', '2026-12-30 21:00:00', 1, 38, 'https://images.pexels.com/photos/31644441/pexels-photo-31644441.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (15, 'LuzonLoop Online NYE Expo', 'A full-day online expo with virtual booths, live product walks, and short talks for teams across Luzon, closing with a New Year countdown.', 5, 15, @creator_id, '2026-12-31 10:00:00', '2026-12-31 22:00:00', 1, 74, 'https://images.pexels.com/photos/5486096/pexels-photo-5486096.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (16, 'LuzonLoop Gaming League', 'A two-week gaming league running through December with daily bracket matches, open sign-ups, and a running leaderboard that visitors can follow on the board.', 1, 3, @creator_id, '2026-12-01 09:00:00', '2026-12-15 21:00:00', 1, 142, 'https://images.pexels.com/photos/30696550/pexels-photo-30696550.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (17, 'Baguio December Opener', 'The opening night of the Baguio live calendar, with local acts warming up the room ahead of the December sessions later in the month.', 2, 2, @creator_id, '2026-12-05 16:00:00', '2026-12-05 22:00:00', 0, 52, 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800')
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
