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
    session_start();

    $username=$_POST['username'];
    $password=$_POST['password'];
    $login=$_POST['login'];

    // $sql="INSERT INTO $tablename(username, password, phone)
      // VALUES ('$username',  '" . md5($password) . "', '$phone')";
    $sql = "SELECT * FROM $tablename WHERE username='$username'
                     AND password='" . md5($password) . "'";

    if (isset($login)) {
      $result = $conn->query($sql);
      $rows = mysqli_num_rows($result);
      if ($rows == 1) {
        $_SESSION['username'] = $username;
        header('Location: index.php');
      } else {
        echo ('<script>alert("username or password doesnt exist")</script>');
      }
    }
  ?>

  <main>
    <form action="login.php" method="POST">
      <input type="text" name="username" required>
      <input type="password" name="password" required>
      <input type="submit" name="login" value="Login">
    </form>

  </main>
</body>
</html>
