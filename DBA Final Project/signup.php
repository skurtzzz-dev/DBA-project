<?php
require __DIR__ . '/config.php';

start_app_session();
require_methods(['POST']);
require_ajax();

$input = json_input();
$fullName = trim(required_string($input, 'fullName'));
$email = strtolower(trim(required_string($input, 'email')));
$password = required_string($input, 'password');
$confirmPassword = required_string($input, 'confirmPassword');

if (!preg_match('/^[\p{L}\p{M}][\p{L}\p{M} .,\'\-]{1,99}$/u', $fullName)) {
  send_json(['error' => 'Enter a full name using 2–100 letters.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
  send_json(['error' => 'Enter a valid email address.'], 400);
}

if (strlen($password) < 8 || strlen($password) > 72 || !preg_match('/[A-Za-z]/', $password) || !preg_match('/\d/', $password)) {
  send_json(['error' => 'Use 8–72 characters with at least one letter and one number.'], 400);
}

if ($password !== $confirmPassword) {
  send_json(['error' => 'Passwords do not match.'], 400);
}

try {
  $duplicate = $pdo->prepare('SELECT user_id FROM users WHERE email = :email LIMIT 1');
  $duplicate->execute(['email' => $email]);
  if ($duplicate->fetchColumn()) {
    send_json(['error' => 'That email is already in use.'], 409);
  }
} catch (PDOException $error) {
  db_error();
}

try {
  $insert = $pdo->prepare('INSERT INTO users (full_name, email, password_hash, role) VALUES (:full_name, :email, :password_hash, :role)');
  $insert->execute([
    'full_name' => $fullName,
    'email' => $email,
    'password_hash' => password_hash($password, PASSWORD_DEFAULT),
    'role' => 'user'
  ]);
} catch (PDOException $error) {
  if (is_duplicate_error($error)) send_json(['error' => 'That email is already in use.'], 409);
  db_error('Could not create account.');
}

$user = [
  'user_id' => (int)$pdo->lastInsertId(),
  'full_name' => $fullName,
  'email' => $email,
  'role' => 'user'
];

session_regenerate_id(true);
$_SESSION['user'] = $user;

send_json(['ok' => true, 'user' => $user]);
