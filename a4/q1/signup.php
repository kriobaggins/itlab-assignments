<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment 4</title>
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
        <li><a href="../q1" class="active">Q1</a></li>
        <li><a href="../q2">Q2</a></li>
        <li><a href="../q3">Q3</a></li>
        <li><a href="../q4">Q4</a></li>
        <li><a href="../q5">Q5</a></li>
      </ul>
    </div>
  </nav>

  <?php
    include 'db_create.php';
    if (isset($_POST['register'])) {
      $username=$_POST['username'];
      $password=$_POST['password'];
      $phone=$_POST['phone'];

      $username = mysqli_real_escape_string($conn, $username);
      $phone = mysqli_real_escape_string($conn, $phone);

      $sql="INSERT INTO $tablename(username, password, phone)
        VALUES ('$username',  '" . md5($password) . "', '$phone')";

      if (!mysqli_query($conn, $sql)) {
        echo ('<script>alert("user already exists")</script>');
      } else {
        header('Location: login.php');
      }
    }
    mysqli_close($conn);
  ?>

  <a href="." style="text-align: center;">Go to Home</a>
  <main>
    <form action="signup.php" method="POST">
      <h2>Signup</h2>
      <div class="textfield">
        <label for="username">Username</label>
        <input type="text" name="username" required>
      </div>
      <div class="textfield">
        <label for="password">Password</label>
        <input type="password" name="password" required>
      </div>
      <div class="textfield">
        <label for="password">Phone No.</label>
        <input type="number" name="phone" pattern="/^[789]\d{9}$/" required>
      </div>
      <button type="submit" name="register">Register <span> &#8594 </span></button>
      <div class="form-links">
        <a class="form-link" href="login.php">Already have an Account? Login</a>
        <a class="form-link" href="reset.php">Forgot Password?</a>
        <a class="form-link" href="change_pass.php">Want to change Password?</a>
      </div>
    </form>
  </main>
</body>
</html>
