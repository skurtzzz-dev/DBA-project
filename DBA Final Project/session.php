<?php
require __DIR__ . '/config.php';

start_app_session();
require_methods(['GET']);

if (!isset($_SESSION['user']['user_id'])) {
  send_json(['ok' => true, 'user' => null]);
}

$userId = (int)$_SESSION['user']['user_id'];

try {
  $statement = $pdo->prepare('SELECT user_id, full_name, email, role FROM users WHERE user_id = :user_id LIMIT 1');
  $statement->execute(['user_id' => $userId]);
  $account = $statement->fetch();
} catch (PDOException $error) {
  db_error();
}

if (!$account) {
  $_SESSION = [];
  clear_session_cookie();
  session_destroy();
  send_json(['ok' => true, 'user' => null]);
}

$user = [
  'user_id' => (int)$account['user_id'],
  'full_name' => $account['full_name'],
  'email' => $account['email'],
  'role' => $account['role']
];

$_SESSION['user'] = $user;
send_json(['ok' => true, 'user' => $user]);
