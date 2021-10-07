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
        <li><a href="../q1">Q1</a></li>
        <li><a href="../q2">Q2</a></li>
        <li><a href="../q3">Q3</a></li>
        <li><a class="active" href="../q4">Q4</a></li>
        <li><a href="../q5">Q5</a></li>
      </ul>
    </div>
  </nav>

  <?php
    include 'db_create.php';


    if (isset($_POST['login'])) {
      $username=$_POST['username'];
      $password=$_POST['password'];
      $remember=$_POST['remember'];

      $username = mysqli_real_escape_string($conn, $username);

      $sql = "SELECT * FROM $tablename WHERE username='$username'
                       AND password='" . md5($password) . "'";

      $result = mysqli_query($conn, $sql);
      $rows = mysqli_num_rows($result);
      echo $rows;
      if ($rows == 1) {
        if($remember) {
          setcookie("username", $username, time()+86400, "/q4");
        } else {
          setcookie("username", $username, 0, "/q4");
        }
        header('Location: login.php');
      } else {
        echo ('<script>alert("username or password doesnt exist")</script>');
      }
    }

    if (isset($_COOKIE['username'])) {
    ?>
    <div class="hero-section">
      <p>Hello <?php echo $_COOKIE["username"]?></p>
      <a href="logout.php">Logout</a>
      <a href="signup.php">Signup</a>
      <a href="reset.php">Reset Password</a>
      <a href="change_pass.php">Change Password</a>
    </div>
  <?php
    } else {
  ?>
      <a href="." style="text-align: center;">Go to Home</a>
      <main>
        <form action="login.php" method="POST">
          <h2>Login</h2>
          <div class="textfield">
            <label for="username">Username</label>
            <input type="text" name="username" required>
          </div>
          <div class="textfield">
            <label for="password">Password</label>
            <input type="password" name="password" required>
          </div>
          <div class="checkbox">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Remember Me</label>
          </div>
          <button type="submit" name="login">Login <span> &#8594 </span></button>
          <div class="form-links">
            <a class="form-link" href="signup.php">Dont have an Account?</a>
            <a class="form-link" href="reset.php">Forgot Password?</a>
            <a class="form-link" href="change_pass.php">Want to change Password?</a>
          </div>
        </form>

      </main>
  <?php
    }
    mysqli_close($conn);
  ?>

</body>
</html>
