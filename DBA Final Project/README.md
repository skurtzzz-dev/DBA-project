# LuzonLoop — DBA Final Project

Complete XAMPP/PHP/MySQL setup guide for running **LuzonLoop — Event Tracker** on Windows.

LuzonLoop is a database-backed event board with PHP sessions, MySQL accounts, live event listings, saved events, category filters, account management, and event details.

This guide is written for another device. Paths below assume XAMPP is installed at `C:\xampp`, but you must replace `C:\xampp` with your actual XAMPP install path. If XAMPP is on drive `D:`, use `D:\xampp` everywhere.

---

## 1. Project location

Put this folder inside your new device's XAMPP `htdocs` folder:

```text
C:\xampp\htdocs\DBA Final Project
```

Keep the folder name exactly:

```text
DBA Final Project
```

The space matters. If you rename the folder, update the URLs in this README.

Main URL:

```text
http://localhost/DBA%20Final%20Project/index.html
```

phpMyAdmin URL:

```text
http://localhost/phpmyadmin/index.php
```

The `%20` is the URL-encoded space in `DBA Final Project`.

---

## 2. What the project uses

- Apache from XAMPP
- MySQL/MariaDB from XAMPP
- PHP PDO for database access
- PHP sessions for signed-in users
- MySQL database name: `luzonloop`
- Database character set: `utf8mb4`
- Manila time context: `Asia/Manila`

---

## 3. Start XAMPP

1. Open **XAMPP Control Panel**.
2. Start **Apache**.
3. Start **MySQL**.
4. Open `http://localhost/phpmyadmin/index.php`.
5. Confirm phpMyAdmin loads.

If Apache or MySQL fails to start:

- Another app may be using port `80` or `3306`.
- Stop the conflicting app, then start Apache/MySQL again.
- In XAMPP Control Panel, click **Config → Net and Ports** to inspect ports.
- Check the XAMPP logs before continuing.

---

## 4. Confirm the MySQL password on the new device

Do this before importing any SQL. The password `root1234` is only for the current lab computer. A different device may have a different password, and a fresh XAMPP install usually has a blank password.

1. Open:

   ```text
   http://localhost/phpmyadmin/index.php
   ```

2. Try to log in with `root`.
3. If it opens without a login form, phpMyAdmin is using a saved login. Check `C:\xampp\phpMyAdmin\config.inc.php`.
4. If it asks for a login, test the password on that device. Do not assume `root1234` works there.

`config.php` reads credentials from environment variables first, then uses defaults:

```php
$dbHost = getenv('DB_HOST') ?: '127.0.0.1';
$dbName = getenv('DB_NAME') ?: 'luzonloop';
$dbUser = getenv('DB_USER') ?: 'root';
$dbPass = getenv('DB_PASS') ?: 'root1234';
```

Set those values to match the new device.

### Fresh XAMPP install

Fresh XAMPP usually uses:

```text
Host: 127.0.0.1
Port: 3306
Database: luzonloop
Username: root
Password: blank
```

Use:

```php
$dbPass = getenv('DB_PASS') ?: '';
```

### Current lab computer only

The lab computer uses:

```text
Username: root
Password: root1234
```

Use:

```php
$dbPass = getenv('DB_PASS') ?: 'root1234';
```

If you set your own MySQL root password on the new device, use that exact password.

Do not run `schema.sql`, `create_user.php`, or `seed.sql` until PHP can connect with these credentials.

### Make phpMyAdmin use the same login

Open:

```text
C:\xampp\phpMyAdmin\config.inc.php
```

If this line is present:

```php
$cfg['Servers'][$i]['auth_type'] = 'config';
```

set the password to match `config.php`:

```php
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = '';
```

For the lab computer only:

```php
$cfg['Servers'][$i]['password'] = 'root1234';
```

If `auth_type` is `cookie`, leave the login form and use the same username/password there.

Save the file, then reopen `http://localhost/phpmyadmin/index.php`.

---

## 5. Import the database schema

### Option A: phpMyAdmin, recommended

1. Open `http://localhost/phpmyadmin/index.php`.
2. Log in with your MySQL username and password.
3. Click **Import**.
4. Choose:

```text
C:\xampp\htdocs\DBA Final Project\schema.sql
```

5. Click **Go**.

`schema.sql` creates the `luzonloop` database and these tables:

1. `users`
2. `event_types`
3. `locations`
4. `events`
5. `saved_events`

It also inserts the 14 default event categories.

### Option B: Command Prompt

Replace `C:\xampp` with your actual XAMPP install path. Open **Command Prompt**, then run:

```bat
cd /d "C:\xampp\htdocs\DBA Final Project"
"C:\xampp\mysql\bin\mysql.exe" --protocol=TCP -h 127.0.0.1 -P 3306 -u root -p < schema.sql
```

When prompted, type the MySQL password for that device. If the password is blank, omit `-p`:

```bat
"C:\xampp\mysql\bin\mysql.exe" --protocol=TCP -h 127.0.0.1 -P 3306 -u root < schema.sql
```

`--protocol=TCP -h 127.0.0.1 -P 3306` avoids local socket/authentication mismatches.

---

## 6. Create the first MySQL user

Sample events need at least one existing user because `events.created_by` references `users.user_id`.

Run, replacing `C:\xampp` if your XAMPP install path is different:

```bat
cd /d "C:\xampp\htdocs\DBA Final Project"
C:\xampp\php\php.exe create_user.php "Juan Dela Cruz" juan@example.com Juan1234 admin
```

Use a unique email if `juan@example.com` is already taken.

Password rules:

- 8 to 72 characters
- At least one letter
- At least one number

Name rules:

- 2 to 100 characters
- Letters, spaces, periods, commas, apostrophes, and hyphens are allowed

The password is stored with `password_hash()`, not plain text.

---

## 7. Import sample events

### Option A: phpMyAdmin

1. Open `http://localhost/phpmyadmin/index.php`.
2. Select the `luzonloop` database.
3. Click **Import**.
4. Choose:

```text
C:\xampp\htdocs\DBA Final Project\seed.sql
```

5. Click **Go**.

### Option B: Command Prompt

```bat
cd /d "C:\xampp\htdocs\DBA Final Project"
"C:\xampp\mysql\bin\mysql.exe" --protocol=TCP -h 127.0.0.1 -P 3306 -u root -p < seed.sql
```

Type the password for that device when prompted. For blank password:

```bat
"C:\xampp\mysql\bin\mysql.exe" --protocol=TCP -h 127.0.0.1 -P 3306 -u root < seed.sql
```

`seed.sql` inserts or updates:

- 15 locations
- 17 sample events

It assigns all sample events to the lowest existing `user_id`:

```sql
SET @creator_id = (SELECT MIN(user_id) FROM users);
```

Re-importing `seed.sql` updates existing rows by primary key, so it is safe to run again.

---

## 8. Open the app

Go to:

```text
http://localhost/DBA%20Final%20Project/index.html
```

You should see:

- Event board
- Filters
- Category strip
- Sign up / Sign in buttons
- Saved list button

If the page loads but events are missing, check `events.php` and confirm `schema.sql` and `seed.sql` were imported.

---

## 9. Verify the database from phpMyAdmin

Open `http://localhost/phpmyadmin/index.php`, select `luzonloop`, then run:

```sql
SELECT
  (SELECT COUNT(*) FROM users) AS users,
  (SELECT COUNT(*) FROM event_types) AS event_types,
  (SELECT COUNT(*) FROM locations) AS locations,
  (SELECT COUNT(*) FROM events) AS events,
  (SELECT COUNT(*) FROM saved_events) AS saved_events;
```

Expected after fresh setup:

```text
users: at least 1
event_types: 14
locations: 15
events: 17
saved_events: 0 or more
```

Check organizer joins:

```sql
SELECT
  e.event_id,
  e.event_name,
  u.full_name AS organizer,
  et.type_name,
  l.venue_name
FROM events e
JOIN users u ON u.user_id = e.created_by
JOIN event_types et ON et.type_id = e.type_id
JOIN locations l ON l.location_id = e.location_id
ORDER BY e.event_id
LIMIT 5;
```

Check account password hashes:

```sql
SELECT user_id, full_name, email, role, password_hash
FROM users
ORDER BY user_id;
```

`password_hash` should start with `$2y$` or another valid PHP password hash prefix. It should never be a plain password.

---

## 10. Test the app flow

### Sign up

1. Click **Sign up**.
2. Enter full name, email, password, and confirmation.
3. Submit.
4. Confirm the header shows the signed-in user.
5. In phpMyAdmin, run:

```sql
SELECT user_id, full_name, email, role, created_at
FROM users
ORDER BY user_id DESC
LIMIT 1;
```

### Sign in

1. Click **Sign in**.
2. Use an existing email and password.
3. Confirm the greeting changes to the signed-in user.

### Save an event

1. While signed in, open an event.
2. Save/bookmark it.
3. In phpMyAdmin, run:

```sql
SELECT user_id, event_id, saved_at
FROM saved_events
ORDER BY saved_at DESC
LIMIT 5;
```

### Account update

1. Open **Account**.
2. Update the full name, email, or password.
3. Confirm the page reflects the update.
4. Verify the row in `users`.

---

## 11. PHP endpoints

- `signup.php` — validates registration, hashes password, inserts into `users`, starts a session
- `login.php` — validates email format and password, verifies hash, starts a session
- `session.php` — re-reads the signed-in user from `users` and clears stale sessions
- `account.php` — reads and updates the signed-in user's name, email, and password
- `events.php` — joins `events`, `event_types`, `locations`, and `users`; includes saved IDs
- `saved.php` — returns the signed-in user's saved event IDs
- `save.php` — inserts or removes a row in `saved_events`
- `logout.php` — ends the PHP session

State-changing endpoints require a same-origin header:

```text
X-Requested-With: XMLHttpRequest
```

`script.js` sends this automatically, so normal browser use works.

---

## 12. Table purposes

### `users`

Stores accounts and event creators.

Columns:

- `user_id`
- `full_name`
- `email`
- `password_hash`
- `role`
- `created_at`

### `event_types`

Stores the 14 event categories.

### `locations`

Stores venue, street, barangay, city, province, and region data.

### `events`

Stores event details and foreign keys:

- `type_id` → `event_types.type_id`
- `location_id` → `locations.location_id`
- `created_by` → `users.user_id`

### `saved_events`

Stores user bookmarks.

Primary key:

```sql
PRIMARY KEY (user_id, event_id)
```

A user cannot save the same event twice.

---

## 13. Included features

- Live event listings loaded from MySQL through `events.php`
- Category filter and moving index strip populated from `event_types`
- Venue, city, and area data loaded from `locations`
- Organizer name loaded from `users.full_name`
- Saved events synced with `saved_events` when signed in
- Sign-up flow for normal `user` accounts
- Command-line account creation with `admin` or `user` role
- Account management for full name, email, and password
- Search, place, category, entrance, and status filters
- Event details modal with date, venue, area, interest count, and highlights
- Graceful event fallback if `events.php` is temporarily unavailable
- Manila, Philippines clock in the footer
- Simple loading screen
- Click sound

---

## 14. Important notes

- Seeded event data is illustrative; replace it with real listings before publishing.
- There is no fake demo account. Create an account through the app or `create_user.php`.
- Sign-up and sign-in use PHP/MySQL.
- Passwords are hashed with `password_hash()` and verified with `password_verify()`.
- Never store plain-text passwords.
- Interest markers stay in browser local storage because the schema has no interest table.
- Event dates are treated as Manila time (`Asia/Manila`).
- The current app is intended for localhost/XAMPP use.
- The password `root1234` is only for the current lab computer. On another device, confirm that device's MySQL password first.
- If the project was copied from the lab computer, edit `config.php` before running SQL or opening the app.
- Real public deployment needs HTTPS, hardened credentials, and secure session/cookie settings.

---

## 15. Troubleshooting

### `Database connection failed.`

Cause: PHP cannot connect to MySQL.

Fix:

1. Confirm MySQL is running in XAMPP.
2. Open `config.php`.
3. Confirm `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASS`.
4. Test the password in phpMyAdmin first.
5. On a fresh XAMPP install, use blank:

   ```php
   $dbPass = getenv('DB_PASS') ?: '';
   ```

6. On the current lab computer only, use:

   ```php
   $dbPass = getenv('DB_PASS') ?: 'root1234';
   ```

7. If the new device has its own MySQL password, use that exact password.
8. Save `config.php`, then reload the page.

### phpMyAdmin says `Access denied`

Cause: phpMyAdmin login does not match the MySQL root account.

Fix:

1. Use the same MySQL username and password as `config.php`.
2. On a fresh XAMPP install, try `root` with a blank password.
3. On the current lab computer only, use:

   ```text
   Username: root
   Password: root1234
   ```

4. If phpMyAdmin uses saved `config` auth, update `C:\xampp\phpMyAdmin\config.inc.php` to match.
5. If phpMyAdmin uses `cookie` auth, type the credentials in the login form.

### CLI says `Access denied for user 'root'@'localhost'` but PHP works

Cause: CLI may be using a different socket/user host, or the password in the command is wrong.

Fix: force TCP and let the command prompt for the password:

```bat
"C:\xampp\mysql\bin\mysql.exe" --protocol=TCP -h 127.0.0.1 -P 3306 -u root -p
```

If the password is blank, omit `-p`.

### Events do not appear

Fix:

1. Confirm `schema.sql` was imported.
2. Confirm `seed.sql` was imported after creating at least one user.
3. Run:

```sql
SELECT COUNT(*) FROM events;
```

4. Check `events.php` directly:

```text
http://localhost/DBA%20Final%20Project/events.php
```

### `create_user.php` says email already in use

Fix: use a different email or delete the existing test user:

```sql
DELETE FROM users WHERE email = 'juan@example.com';
```

Only do this if no important saved events reference that user.

### Saved event does not persist

Fix:

1. Confirm you are signed in.
2. Check `saved.php`.
3. Check `saved_events`.
4. Confirm `X-Requested-With: XMLHttpRequest` is present if calling endpoints manually.

---

## 16. Reset the database

To start over completely:

1. Open phpMyAdmin.
2. Select `luzonloop`.
3. Click **Drop**.
4. Re-import `schema.sql`.
5. Create a user with `create_user.php`.
6. Re-import `seed.sql`.

Or run:

```sql
DROP DATABASE IF EXISTS luzonloop;
```

Then repeat the setup steps.

---

## 17. Fresh-device checklist

```text
[ ] Install XAMPP on the new device.
[ ] Put this folder in the new device's htdocs folder.
[ ] Keep the folder name exactly: DBA Final Project.
[ ] Replace C:\xampp paths in this README with the real XAMPP path.
[ ] Start Apache and MySQL.
[ ] Open http://localhost/phpmyadmin/index.php.
[ ] Confirm the MySQL root password on that device.
[ ] Set config.php DB credentials to match that device.
[ ] Set phpMyAdmin config or login to the same credentials.
[ ] Import schema.sql.
[ ] Create the first user with create_user.php.
[ ] Import seed.sql.
[ ] Open http://localhost/DBA%20Final%20Project/index.html.
[ ] Sign up or sign in.
[ ] Save an event.
[ ] Verify users and saved_events in phpMyAdmin.
```

Do not copy the lab computer's `root1234` password into the new device's `config.php` unless that device's MySQL root password is also `root1234`.

---

## 18. Main links to remember

```text
App:
http://localhost/DBA%20Final%20Project/index.html

phpMyAdmin:
http://localhost/phpmyadmin/index.php

Events API:
http://localhost/DBA%20Final%20Project/events.php

Session API:
http://localhost/DBA%20Final%20Project/session.php

Saved API:
http://localhost/DBA%20Final%20Project/saved.php
```
