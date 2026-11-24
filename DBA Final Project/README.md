# LuzonLoop — Event Tracker

A responsive event board with PHP/MySQL accounts, live event listings, saved bookmarks, filters, and event details.

## Database tables

`schema.sql` creates five tables:

1. `users` — sign-up, sign-in, account management, and event creators
2. `events` — event information, using `interested_count` and `is_free`
3. `event_types` — the 14 event categories
4. `locations` — venue and address details
5. `saved_events` — user bookmarks with a composite primary key

`schema.sql` and `seed.sql` create/select the `luzonloop` database by default. If you use another name, update the `USE luzonloop;` lines in both SQL files and set the same name in `config.php` or the `DB_NAME` environment variable.

## Run locally

1. Place this folder inside your PHP server root, such as XAMPP `htdocs`.
2. Start Apache and MySQL.
3. Import `schema.sql` into MySQL.
4. Set your database name and credentials in `config.php`, or use the environment variables listed above.
5. Create the first account from the command line:

   ```bash
   php create_user.php "Juan Dela Cruz" juan1234 admin
   ```

   The **Sign up** button in the page header creates normal `user` accounts through `signup.php`. Registration requires a 2–100 character full name, a valid email, an 8–72 character password with at least one letter and one number, and matching confirmation. Duplicate emails are rejected.

6. Import `seed.sql` after at least one account exists. The seed assigns all sample events to the lowest existing `user_id`, so it works even when that ID is not `1`. Re-importing updates existing rows by primary key. Event cards and details use `image_url` when present and fall back to the built-in poster design. The organizer shown on cards and details comes from the event creator's `users.full_name`.
7. Open the site through the PHP server, for example `http://localhost/DBA%20Final%20Project/index.html`.

Sign-in validates the email format and password before querying MySQL. Passwords are stored with `password_hash()` and verified with `password_verify()`. Never store plain-text passwords.

## PHP endpoints

- `signup.php` — validates registration fields, hashes the password, inserts into `users`, and starts a PHP session
- `login.php` — verifies account credentials and starts a PHP session
- `session.php` — re-reads the signed-in user from `users` and clears stale sessions
- `account.php` — reads and updates the signed-in user's name, email, and password
- `events.php` — joins `events`, `event_types`, `locations`, and `users`, and includes saved IDs
- `saved.php` — returns the signed-in user's saved event IDs
- `save.php` — inserts or removes a row in `saved_events`
- `logout.php` — ends the PHP session

State-changing endpoints require a same-origin `X-Requested-With: XMLHttpRequest` header, which the frontend sends automatically.

## Included features

- Live event listings loaded from MySQL through `events.php`
- Category filter and moving index strip populated from `event_types`
- Venue, city, and area data loaded from `locations`
- Creator name loaded from `users` and displayed as the organizer
- Saved events synced with `saved_events` when signed in
- Sign-up flow for new `user` accounts with hashed passwords
- Account management for full name, email, and password
- Graceful event fallback if `events.php` is temporarily unavailable
- Search, place (`Online`, `NCR`, `Outside NCR`), category, entrance, and status filters
- Event details modal with date, venue, area, interest count, and highlights
- Local interest markers stored in the browser
- Manila, Philippines clock in the footer
- Simple loading screen and click sound

## Important notes

- Seeded event data is illustrative; replace it with real listings before publishing.
- Sign-up and sign-in use the PHP/MySQL backend; there is no fake demo account.
- Interest markers remain in browser local storage because the provided schema has no interest table.
- Event dates are treated as Manila time (`Asia/Manila`).
