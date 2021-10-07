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
        <li><a href="../../q1">Q1</a></li>
        <li><a href="../../q2">Q2</a></li>
        <li><a class="active" href="../../q3">Q3</a></li>
        <li><a href="../../q4">Q4</a></li>
        <li><a href="../../q5">Q5</a></li>
      </ul>
    </div>
  </nav>

  <?php
    include '../db_create.php';

    function parseInt ($value) {
      return preg_replace('/\D/', '', $value);
    }
    function totalCost($data) {
      return parseInt($data['ticket']) + parseInt($data['hotelName']) + parseInt($data['hotelRoom']) + parseInt($data['meals']) + parseInt($data['transport']);
    }

    if (isset($_COOKIE['email'])) {
      $sql = "SELECT * FROM $tablename WHERE email='". $_COOKIE['email'] ."'";

      $result = mysqli_query($conn, $sql);
      $data = mysqli_fetch_array($result);
      $rows = mysqli_num_rows($result);

      if ($rows == 1) {
  ?>
      <main>
        <div>
          <h2>Person Details (<?php echo $data['jobRole']?>)</h2>
          <div>Name: <?php echo $data['username']?> </div>
          <div>Email: <?php echo $data['email']?> </div>
          <div>Phone No.: <?php echo $data['phone']?> </div>
          <div>Gender: <?php echo $data['gender']?> </div>
          <div>Country: <?php echo $data['country']?> </div>

          <h2>Package Details</h2>
          <div>Ticket: <?php echo $data['ticket']?> </div>
          <div>Hotel Name: <?php echo $data['hotelName']?> </div>
          <div>Hotel Room: <?php echo $data['hotelRoom']?> </div>
          <div>Meals: <?php echo $data['meals']?> </div>
          <div>Transport: <?php echo $data['transport']?> </div>
          <div>Total: <?php echo "₹" . totalCost($data)?> </div>
          <a href="../logout.php" style="text-align: center;">Logout</a>
        </div>
      </main>
  <?php
      } else {
        header("Location: ../");
      }
    }
    mysqli_close($conn);
  ?>

</body>
</html>
