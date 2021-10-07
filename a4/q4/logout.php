<?php
  if (isset($_COOKIE['username'])) {
    unset($_COOKIE['username']);
    setcookie('username', null, -1, '/');
    header("location: index.php");
  }
?>
