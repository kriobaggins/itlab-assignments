<?php
  include 'db_create.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment 3</title>
  <link rel="stylesheet" href="../public/global.css">
  <link rel="stylesheet" href="main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <nav class="navbar">
    <div class="left">
      <a class="back-button" href="/"> &#8592 </a>
      <div class="current-page">Assignment 4</div>
    </div>

    <div class="right">
      <ul>
        <li><a href="../q1">Q1</a></li>
        <li><a href="../q2">Q2</a></li>
        <li><a href="../q3">Q3</a></li>
        <li><a class="active" href="../q4">Q4</a></li>
        <li><a href="../q5">Q5</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <div class="hero-section">

    <?php
      if(!isset($_COOKIE["username"])) {
    ?>
      <p>Hello...Umm..I dont know you. Choose one of the below links for me to know.</p>
      <a href="signup.php">Signup</a>
      <a href="login.php">Login</a>
    <?php
      } else {
    ?>
      <p>Hello <?php echo $_COOKIE["username"]?></p>
      <a href="logout.php">Logout</a>
    <?php
      }
    ?>
      <a href="reset.php">Reset Password</a>
      <a href="change_pass.php">Change Password</a>

    </div>
  </main>
</body>
</html>

