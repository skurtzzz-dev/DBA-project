<?php
require __DIR__ . '/config.php';

start_app_session();
require_methods(['POST']);
require_ajax();

$input = json_input();
$email = strtolower(trim(required_string($input, 'email')));
$password = required_string($input, 'password');

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
  send_json(['error' => 'Enter a valid email address.'], 400);
}

if ($password === '' || strlen($password) > 72) {
  send_json(['error' => 'Enter your password.'], 400);
}

try {
  $statement = $pdo->prepare('SELECT user_id, full_name, email, role, password_hash FROM users WHERE email = :email LIMIT 1');
  $statement->execute(['email' => $email]);
  $account = $statement->fetch();
} catch (PDOException $error) {
  db_error();
}

if (!$account || !password_verify($password, $account['password_hash'])) {
  send_json(['error' => 'Incorrect email or password.'], 401);
}

unset($account['password_hash']);
$account['user_id'] = (int)$account['user_id'];

session_regenerate_id(true);
$_SESSION['user'] = $account;

send_json(['ok' => true, 'user' => $account]);
