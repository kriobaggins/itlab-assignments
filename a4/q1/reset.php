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
    include 'randompass.php';

    $username=$_POST['username'];
    $phone=$_POST['phone'];
    $reset=$_POST['reset'];

    $sql = "SELECT * FROM $tablename WHERE username='$username'
                     AND phone='$phone'";

    if (isset($reset)) {
      $result = $conn->query($sql);
      $rows = mysqli_num_rows($result);
      $randpass = randomPassword();
      if ($rows == 1) {
        $sqlresetpass = "UPDATE $tablename
        SET password = '" . md5($randpass) ."'
        WHERE username = '$username' AND phone = '$phone'";
        if ($conn->query($sqlresetpass) === TRUE) {
          echo ("
          <script>
            alert('new password: $randpass');
            document.location = 'login.php';
          </script>");
        } else {
          echo ('<script>alert("password change failed")</script>');
        }

      } else {
        echo ('<script>alert("username or phone no. doesnt exist")</script>');
      }
    }

  ?>
  <a href="." style="text-align: center;">Go to Home</a>

  <main>
    <form action="reset.php" method="POST">
      <h2>Reset Password</h2>
      <div class="textfield">
        <label for="username">Username</label>
        <input type="text" name="username" required>
      </div>
      <div class="textfield">
        <label for="password">Phone No.</label>
        <input type="number" name="phone" required>
      </div>
      <button type="submit" name="reset">Reset <span> &#8594 </span></button>
    </form>

  </main>
</body>
</html>