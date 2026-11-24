<?php
require __DIR__ . '/config.php';

start_app_session();
require_methods(['GET', 'POST']);
$userId = require_user_id();

try {
  $statement = $pdo->prepare('SELECT user_id, full_name, email, role, password_hash FROM users WHERE user_id = :user_id LIMIT 1');
  $statement->execute(['user_id' => $userId]);
  $account = $statement->fetch();
} catch (PDOException $error) {
  db_error();
}

if (!$account) {
  $_SESSION = [];
  clear_session_cookie();
  session_destroy();
  send_json(['error' => 'Account no longer exists.'], 401);
}

$user = [
  'user_id' => (int)$account['user_id'],
  'full_name' => $account['full_name'],
  'email' => $account['email'],
  'role' => $account['role']
];

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
  send_json(['ok' => true, 'user' => $user]);
}

require_ajax();

$input = json_input();
$fullName = trim(required_string($input, 'fullName'));
$email = strtolower(trim(required_string($input, 'email')));
$newPassword = optional_string($input, 'newPassword');
$currentPassword = optional_string($input, 'currentPassword');

if (!preg_match('/^[\p{L}\p{M}][\p{L}\p{M} .,\'\-]{1,99}$/u', $fullName)) {
  send_json(['error' => 'Enter a full name using 2–100 letters.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
  send_json(['error' => 'Enter a valid email address.'], 400);
}

if ($newPassword !== '' && (strlen($newPassword) < 8 || strlen($newPassword) > 72 || !preg_match('/[A-Za-z]/', $newPassword) || !preg_match('/\d/', $newPassword))) {
  send_json(['error' => 'Use 8–72 characters with at least one letter and one number.'], 400);
}

$emailChanged = $email !== $account['email'];
$passwordChanged = $newPassword !== '';

if (($emailChanged || $passwordChanged) && !password_verify($currentPassword, $account['password_hash'])) {
  send_json(['error' => 'Current password is incorrect.'], 401);
}

if ($emailChanged) {
  try {
    $duplicate = $pdo->prepare('SELECT user_id FROM users WHERE email = :email AND user_id <> :user_id LIMIT 1');
    $duplicate->execute(['email' => $email, 'user_id' => $userId]);
    if ($duplicate->fetchColumn()) {
      send_json(['error' => 'That email is already in use.'], 409);
    }
  } catch (PDOException $error) {
    db_error();
  }
}

$passwordHash = $passwordChanged ? password_hash($newPassword, PASSWORD_DEFAULT) : $account['password_hash'];

try {
  $update = $pdo->prepare('UPDATE users SET full_name = :full_name, email = :email, password_hash = :password_hash WHERE user_id = :user_id');
  $update->execute([
    'full_name' => $fullName,
    'email' => $email,
    'password_hash' => $passwordHash,
    'user_id' => $userId
  ]);
} catch (PDOException $error) {
  if (is_duplicate_error($error)) send_json(['error' => 'That email is already in use.'], 409);
  db_error('Could not update account.');
}

if ($passwordChanged) {
  session_regenerate_id(true);
}

$user['full_name'] = $fullName;
$user['email'] = $email;
$_SESSION['user'] = $user;

send_json(['ok' => true, 'user' => $user]);
