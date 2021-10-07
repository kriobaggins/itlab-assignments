<?php
  if (isset($_COOKIE['email'])) {
    unset($_COOKIE['email']);
    setcookie('email', null, -1, '/');
    header("location: .");
  }

  if (isset($_COOKIE['role'])) {
    unset($_COOKIE['role']);
    setcookie('role', null, -1, '/');
    header("location: .");
  }
?>

