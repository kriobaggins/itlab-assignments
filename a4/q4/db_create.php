<?php
  $dbuname="itlaba";
  $dbpass="passwd@123";
  $servername="localhost";
  $dbname = "ITLAB";

  // using IF NOT EXISTS in the query to 
  // create a table if it doesnt exists
  // Reference: https://stackoverflow.com/a/29307581
  $createdb="CREATE DATABASE IF NOT EXISTS $dbname";
  $tablename="ITLABexerciseusers";
  $createtable="CREATE TABLE IF NOT EXISTS $tablename (
    username varchar(100) NOT NULL UNIQUE,
    password char(40) NOT NULL,
    phone varchar(10) NOT NULL
  )";

  $conn = new mysqli($servername, $dbuname, $dbpass);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // echo "Connected Successfully\n";

  if ($conn->query($createdb) === TRUE) {
      // echo "Database created successfully\n";
      mysqli_select_db($conn,$dbname);
  } else {
      echo "Error creating database: " . $conn->error;
  }

  if ($conn->query($createtable) === TRUE) {
      // echo "Table created successfully\n";
  } else {
      echo "Error creating database: " . $conn->error;
  }
  
?>
