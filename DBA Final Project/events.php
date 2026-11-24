<?php
require __DIR__ . '/config.php';

require_methods(['GET']);
start_app_session();

try {
  $types = $pdo->query('SELECT type_name FROM event_types ORDER BY type_id')->fetchAll(PDO::FETCH_COLUMN);

  $savedIds = [];
  if (isset($_SESSION['user']['user_id'])) {
    $savedStatement = $pdo->prepare('SELECT event_id FROM saved_events WHERE user_id = :user_id');
    $savedStatement->execute(['user_id' => (int)$_SESSION['user']['user_id']]);
    $savedIds = array_map('intval', $savedStatement->fetchAll(PDO::FETCH_COLUMN));
  }

  $sql = <<<'SQL'
SELECT
  e.event_id AS id,
  e.event_name AS name,
  e.description,
  et.type_name AS type,
  et.type_id,
  l.location_id,
  l.venue_name AS venue,
  CASE
    WHEN l.region = 'Online' THEN 'Online'
    WHEN l.region = 'NCR' THEN CONCAT(l.city_municipality, ', NCR')
    ELSE CONCAT(l.city_municipality, ', ', l.province)
  END AS city,
  CASE
    WHEN l.region = 'Online' THEN 'Online'
    WHEN l.region = 'NCR' THEN 'NCR'
    ELSE 'Outside NCR'
  END AS area,
  CONCAT(DATE_FORMAT(e.start_datetime, '%Y-%m-%dT%H:%i:%s'), '+08:00') AS start,
  CONCAT(DATE_FORMAT(e.end_datetime, '%Y-%m-%dT%H:%i:%s'), '+08:00') AS end,
  e.is_free,
  e.interested_count AS interested,
  e.image_url,
  e.created_by,
  u.full_name AS organizer
FROM events e
JOIN event_types et ON e.type_id = et.type_id
JOIN locations l ON e.location_id = l.location_id
JOIN users u ON e.created_by = u.user_id
ORDER BY e.start_datetime ASC
SQL;

  $rows = $pdo->query($sql)->fetchAll();
} catch (PDOException $error) {
  db_error();
}

$events = [];

foreach ($rows as $row) {
  $row['id'] = (int)$row['id'];
  $row['type_id'] = (int)$row['type_id'];
  $row['location_id'] = (int)$row['location_id'];
  $row['created_by'] = (int)$row['created_by'];
  $row['interested'] = (int)$row['interested'];
  $row['freeEntrance'] = (bool)$row['is_free'];
  $row['saved'] = in_array($row['id'], $savedIds, true);
  unset($row['is_free']);
  $events[] = $row;
}

send_json([
  'ok' => true,
  'events' => $events,
  'types' => $types,
  'saved' => $savedIds
]);
