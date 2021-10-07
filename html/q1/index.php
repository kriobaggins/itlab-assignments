<?php
  include 'db_create.php';
  session_start();
  if(!isset($_SESSION["username"])) {
    header('location: signup.php');
  } else {
    header('location: login.php');
  }
?>
