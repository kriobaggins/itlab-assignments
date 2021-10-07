<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment 4</title>
  <link rel="stylesheet" href="../../public/global.css">
  <link rel="stylesheet" href="../main.css">
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
    include '../db_create.php';

    extract($_POST);

    $email = mysqli_real_escape_string($conn, $email);
    $password = md5($password);

    $sql = "SELECT * FROM $tablename WHERE email='$email'
                     AND password='$password'";

    if (isset($login)) {
      $result = mysqli_query($conn, $sql);
      $data = mysqli_fetch_array($result);
      $rows = mysqli_num_rows($result);

      if ($rows == 1) {
        $role = $data['jobRole'];
        $role = strtolower($role);
        $role = preg_replace('/[[:space:]]+/', '-', $role);
        if($remember) {
          setcookie("email", $email, time()+86400, "/q3");
          setcookie("role", $role, time()+86400, "/q3");
        } else {
          setcookie("email", $email, 0, "/q3");
          setcookie("role", $role, 0, "/q3");
        }
        // header('Location: login.php');
        header("Location: ../". $role);
      } else {
        echo ('<script>alert("email or password doesnt exist")</script>');
      }
    }

    if (isset($_COOKIE['email'])) {
      header("Location: ../". $_COOKIE['role']);
    } else {
  ?>
      <a href="../" style="text-align: center;">Go to Signup</a>
      <main>
        <form action="index.php" method="POST">
          <h2>Login</h2>
          <div class="textfield">
            <label for="email">Email</label>
            <input type="text" name="email" required>
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
            <a class="form-link" href="../">Dont Have an Account??</a>
          </div>
        </form>

      </main>
  <?php
    }
    mysqli_close($conn);
  ?>

</body>
</html>
