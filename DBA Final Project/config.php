<?php
function send_json($payload, $status = 200) {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  header('Pragma: no-cache');
  echo json_encode($payload);
  exit;
}

function start_app_session() {
  if (session_status() === PHP_SESSION_ACTIVE) return;

  session_set_cookie_params([
    'httponly' => true,
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'samesite' => 'Lax'
  ]);
  session_start();
}

function clear_session_cookie() {
  if (!ini_get('session.use_cookies')) return;

  $params = session_get_cookie_params();
  setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
}

function require_methods(array $methods) {
  $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
  if (in_array($method, $methods, true)) return;

  header('Allow: ' . implode(', ', $methods));
  send_json(['error' => 'Method not allowed.'], 405);
}

function require_ajax() {
  if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'XMLHttpRequest') return;
  send_json(['error' => 'Invalid request.'], 403);
}

function json_input() {
  $input = json_decode(file_get_contents('php://input'), true);
  if (!is_array($input)) send_json(['error' => 'Invalid submission.'], 400);
  return $input;
}

function required_string(array $input, string $key) {
  if (!array_key_exists($key, $input) || !is_string($input[$key])) {
    send_json(['error' => 'Invalid submission.'], 400);
  }
  return $input[$key];
}

function optional_string(array $input, string $key) {
  if (!array_key_exists($key, $input)) return '';
  if (!is_string($input[$key])) send_json(['error' => 'Invalid submission.'], 400);
  return $input[$key];
}

function required_bool(array $input, string $key) {
  if (!array_key_exists($key, $input) || !is_bool($input[$key])) {
    send_json(['error' => 'Invalid submission.'], 400);
  }
  return $input[$key];
}

function required_positive_int(array $input, string $key) {
  if (!array_key_exists($key, $input) || filter_var($input[$key], FILTER_VALIDATE_INT) === false || (int)$input[$key] <= 0) {
    send_json(['error' => 'Invalid submission.'], 400);
  }
  return (int)$input[$key];
}

function require_user_id() {
  start_app_session();
  if (!isset($_SESSION['user']['user_id'])) send_json(['error' => 'Sign in to continue.'], 401);
  return (int)$_SESSION['user']['user_id'];
}

function is_duplicate_error(PDOException $error) {
  if ($error->getCode() === '23000') return true;
  return isset($error->errorInfo[1]) && (int)$error->errorInfo[1] === 1062;
}

function db_error($message = 'Database request failed.') {
  send_json(['error' => $message], 500);
}

$dbHost = getenv('DB_HOST') ?: '127.0.0.1';
$dbName = getenv('DB_NAME') ?: 'luzonloop';
$dbUser = getenv('DB_USER') ?: 'root';
$dbPass = getenv('DB_PASS') ?: 'root1234';

$dsn = "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4";
$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES => false
];

try {
  $pdo = new PDO($dsn, $dbUser, $dbPass, $options);
} catch (PDOException $error) {
  send_json(['error' => 'Database connection failed.'], 500);
}
