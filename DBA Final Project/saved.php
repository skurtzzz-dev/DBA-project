<?php
require __DIR__ . '/config.php';

require_methods(['GET']);
$userId = require_user_id();

try {
  $statement = $pdo->prepare('SELECT event_id FROM saved_events WHERE user_id = :user_id ORDER BY saved_at DESC');
  $statement->execute(['user_id' => $userId]);
  $saved = array_map('intval', $statement->fetchAll(PDO::FETCH_COLUMN));
} catch (PDOException $error) {
  db_error();
}

send_json(['ok' => true, 'saved' => $saved]);
