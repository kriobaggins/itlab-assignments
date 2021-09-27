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

  <?php
    include 'db_create.php';

    $username=$_POST['username'];
    $password=$_POST['password'];
    $newpassword=$_POST['newpassword'];
    $changepass=$_POST['changepass'];

    $sql = "SELECT * FROM $tablename WHERE username='$username'
            AND password='" . md5($password) ."'";

    if (isset($changepass)) {
      $result = $conn->query($sql);
      $rows = mysqli_num_rows($result);

      if ($rows == 1) {
        $sqlresetpass = "UPDATE $tablename
        SET password = '" . md5($newpassword) ."'
        WHERE username = '$username'";
        if ($conn->query($sqlresetpass) === TRUE) {
          echo ("
          <script>
            alert('password changed');
            document.location = 'login.php';
          </script>");
        } else {
          echo ('<script>alert("password change failed")</script>');
        }

      } else {
        echo ('<script>alert("username or password invalid")</script>');
      }
    }
  ?>

  <a href="." style="text-align: center;">Go to Home</a>

  <main>
    <form action="change_pass.php" method="POST">
      <h2>Change Password</h2>
      <div class="textfield">
        <label for="username">Username</label>
        <input type="text" name="username" required>
      </div>
      <div class="textfield">
        <label for="password">Current Password</label>
        <input type="password" name="password" required>
      </div>
      <div class="textfield">
        <label for="password">New Password</label>
        <input type="password" name="newpassword" required>
      </div>
      <button type="submit" name="changepass">Change Password <span> &#8594 </span></button>
    </form>

  </main>
</body>
</html>
