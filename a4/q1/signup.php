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
    $username=$_POST['username'];
    $password=$_POST['password'];
    $phone=$_POST['phone'];
    $register=$_POST['register'];

    $sql="INSERT INTO $tablename(username, password, phone)
      VALUES ('$username',  '" . md5($password) . "', '$phone')";


    if (isset($register)) {
      if ($conn->query($sql) === TRUE) {
        header('Location: login.php');
      } else {
        echo ('<script>alert("user already exists")</script>');
      }
    }
  ?>

  <main>
    <form action="signup.php" method="POST">
      <input type="text" name="username" required>
      <input type="password" name="password" required>
      <input type="number" name="phone" required>
      <input type="submit" name="register" value="Register">
    </form>

  </main>
</body>
</html>
