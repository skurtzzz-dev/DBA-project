<?php
require __DIR__ . '/config.php';

require_methods(['POST']);
require_ajax();
$userId = require_user_id();

$input = json_input();
$eventId = required_positive_int($input, 'eventId');
$saved = required_bool($input, 'saved');

try {
  $check = $pdo->prepare('SELECT 1 FROM events WHERE event_id = :event_id LIMIT 1');
  $check->execute(['event_id' => $eventId]);
  if (!$check->fetchColumn()) {
    send_json(['error' => 'Event not found in the database.'], 404);
  }

  if ($saved) {
    $statement = $pdo->prepare('INSERT INTO saved_events (user_id, event_id, saved_at) VALUES (:user_id, :event_id, NOW()) ON DUPLICATE KEY UPDATE saved_at = NOW()');
  } else {
    $statement = $pdo->prepare('DELETE FROM saved_events WHERE user_id = :user_id AND event_id = :event_id');
  }
  $statement->execute([
    'user_id' => $userId,
    'event_id' => $eventId
  ]);
} catch (PDOException $error) {
  db_error('Could not update saved events.');
}

send_json(['ok' => true]);
