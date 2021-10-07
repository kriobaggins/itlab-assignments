<?php
  $dbuname="itlaba";
  $dbpass="passwd@123";
  $servername="localhost";
  $dbname = "ITLAB";
  $tablename="userprofile";

  // using IF NOT EXISTS in the query to 
  // create a table if it doesnt exists
  // Reference: https://stackoverflow.com/a/29307581
  $createdb="CREATE DATABASE IF NOT EXISTS $dbname";
  $createtable="CREATE TABLE IF NOT EXISTS $tablename (
    username varchar(100) NOT NULL,
    email varchar(60) NOT NULL UNIQUE,
    phone varchar(10) NOT NULL,
    password varchar(40) NOT NULL,
    jobRole varchar(40) NOT NULL,
    gender varchar(6) NOT NULL,
    country varchar(40) NOT NULL,
    currency varchar(6) NOT NULL,
    ticket varchar(20) NOT NULL,
    hotelName varchar(30) NOT NULL,
    hotelRoom varchar(45) NOT NULL,
    meals varchar(45) NOT NULL,
    transport varchar(40) NOT NULL
  )";

  $conn = mysqli_connect($servername, $dbuname, $dbpass);

  if (mysqli_connect_errno()) {
    die("Connection failed: " . mysqli_error($conn));
  }

  if (!mysqli_query($conn, $createdb)) {
    die("Error:" . mysqli_error($conn));
  }

  echo "Database Created <br>";

  mysqli_select_db($conn,$dbname);

  if (!mysqli_query($conn, $createtable)) {
    die("table creation failed". mysqli_error($conn));
  }
  echo "Table Created <br>";
?>
