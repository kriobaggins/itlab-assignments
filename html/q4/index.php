<?php
  include 'db_create.php';
  session_start();
  if(!isset($_COOKIE["username"])) {
    header('location: signup.php');
  } else {
    header('location: login.php');
  }
?>
