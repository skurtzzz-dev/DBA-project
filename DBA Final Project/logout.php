<?php
require __DIR__ . '/config.php';

start_app_session();
require_methods(['POST']);
require_ajax();

$_SESSION = [];
clear_session_cookie();
session_destroy();

send_json(['ok' => true]);
