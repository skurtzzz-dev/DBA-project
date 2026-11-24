<?php
require __DIR__ . '/config.php';

if (PHP_SAPI !== 'cli') {
  http_response_code(403);
  exit('Run this helper from the command line.');
}

$fullName = trim($argv[1] ?? '');
$email = strtolower(trim($argv[2] ?? ''));
$password = $argv[3] ?? '';
$role = $argv[4] ?? 'user';

if (!preg_match('/^[\p{L}\p{M}][\p{L}\p{M} .,\'\-]{1,99}$/u', $fullName)) {
  exit("Usage: php create_user.php \"Full Name\" email@example.com password [admin|user]\nName must be 2–100 letters.\n");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
  exit("Enter a valid email address.\n");
}

if (strlen($password) < 8 || strlen($password) > 72 || !preg_match('/[A-Za-z]/', $password) || !preg_match('/\d/', $password)) {
  exit("Password must be 8–72 characters with at least one letter and one number.\n");
}

if (!in_array($role, ['admin', 'user'], true)) {
  exit("Role must be admin or user.\n");
}

try {
  $duplicate = $pdo->prepare('SELECT user_id FROM users WHERE email = :email LIMIT 1');
  $duplicate->execute(['email' => $email]);
  if ($duplicate->fetchColumn()) {
    exit("That email is already in use.\n");
  }

  $statement = $pdo->prepare('INSERT INTO users (full_name, email, password_hash, role) VALUES (:full_name, :email, :password_hash, :role)');
  $statement->execute([
    'full_name' => $fullName,
    'email' => $email,
    'password_hash' => password_hash($password, PASSWORD_DEFAULT),
    'role' => $role
  ]);
} catch (PDOException $error) {
  if (is_duplicate_error($error)) exit("That email is already in use.\n");
  exit("Could not create account: {$error->getMessage()}\n");
}

echo "Created {$role} account: {$email}\n";
